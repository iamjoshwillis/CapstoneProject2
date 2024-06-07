const User = require("../models/user");
const express = require("express");
const db = require("../db");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");

router.post("/token", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

//New User Registration
router.post("/register", async (req, res, next) => {
  try {
    const newUser = await User.register({ ...req.body })
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (e) {
    return next(e);
  }
});

//Login Route
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ExpressError("Username and password required", 400);
    }
    const results = await db.query(
      `SELECT username, password FROM users WHERE username = $1`,
      [username]
    );
    const user = results.rows[0];
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({username}, SECRET_KEY)
        return res.json({ message: `Logged In!`, token });
      }
      throw new ExpressError("Invalid credentials", 400);
    }
  } catch (e) {
    return next(e); 
  }
});


module.exports = router;
