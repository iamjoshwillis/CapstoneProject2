const express = require("express");
const db = require("../db");
const House = require("../models/house");

const router = new express.Router();

//Get all houses and all information
router.get("/", async (req, res, next) => {
  try {
    const houses = await House.getAll();
    return res.json(houses);
  } catch (e) {
    return next(e);
  }
});

//Get house information by id
router.get("/:id", async (req, res, next) => {
  try {
    const house = await House.getById(req.params.id);
    return res.json(house);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;