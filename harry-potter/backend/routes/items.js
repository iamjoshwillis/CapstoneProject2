const express = require("express");
const db = require("../db");
const Item = require("../models/item");

const router = new express.Router();

//Get all shopping items and all information
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.getAll();
    return res.json(items);
  } catch (e) {
    return next(e);
  }
});

//Get shopping information by id
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.getById(req.params.id);
    return res.json(item);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;