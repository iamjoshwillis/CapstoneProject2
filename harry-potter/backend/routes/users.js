const express = require("express");
const db = require("../db");
const User = require("../models/user");

const router = new express.Router();

//Get all users and all information
router.get("/", async (req, res, next) => {
  try {
    const users = await User.getAll();
    return res.json(users);
  } catch (e) {
    return next(e);
  }
});

//Get user information by username
router.get("/:username", async (req, res, next) => {
  try {
    const user = await User.getByUsername(req.params.username);
    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

//Sort User into House
router.patch("/sortinghat/:username", async (req, res, next) => {
  try {
    const username = req.params.username;
    const sortedUser = await User.sort(username)
    return res.json(sortedUser);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
