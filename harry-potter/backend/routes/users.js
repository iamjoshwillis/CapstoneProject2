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

//Create new user
router.post("/", async (req, res, next) => {
  try {
    const house = Math.floor(Math.random() * 4) + 1;
    const { username, first_name, last_name, bio, email, password } = req.body;
    const user = await User.create(username, first_name, last_name, house, bio, email, password);
    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

//Sort User into House
router.patch("/sortinghat/:username", async (req, res, next) => {
  try {
    const username = await User.getByUsername(req.params.username)
    const house = await User.sortingHat(username);
    return res.json(house);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
