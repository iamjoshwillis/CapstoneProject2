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

//Get user information by id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.getById(req.params.id);
    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

//Create new user
router.post("/", async (req, res, next) => {
  try {
    const { username, bio, email, password } = req.body;
    const user = await User.create(username, bio, email, password);
    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

//Sort user into house
router.patch("/:id/sort", async (req, res, next) => {
  try {
    const house = await User.sortingHat(req.params.id);
    return res.json(house);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
