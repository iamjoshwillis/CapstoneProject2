const User = require("../models/user");
const express = require("express");
const db = require("../db");
const router = new express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const {ensureLoggedIn} = require("../middleware/auth")
const ExpressError = require("../expressError");

//New User Registration
router.post("/register", async (req, res, next) => {
  try {
    const { username, first_name, last_name, password, email, bio } = req.body;
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const results = db.query(
      `INSERT INTO users (username, first_name, last_name, password, email, bio)
    VALUES ($1, $2, $3, $4, $5, $6)`,
      [username, first_name, last_name, hashedPassword, email, bio]
    );
    return res.json(results.rows[0]);
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
