const express = require("express");
const db = require("../db");
const Store = require("../models/store");

const router = new express.Router();

//Get all courses and all information
router.get("/", async (req, res, next) => {
  try {
    const store = await Store.getAll();
    return res.json(store);
  } catch (e) {
    return next(e);
  }
});


module.exports = router;