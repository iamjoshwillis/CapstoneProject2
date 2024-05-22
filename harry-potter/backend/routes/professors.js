const express = require("express");
const db = require("../db");
const Professor = require("../models/professor");

const router = new express.Router();

//Get all professors and all information
router.get("/", async (req, res, next) => {
  try {
    const professor = await Professor.getAll();
    return res.json(professor);
  } catch (e) {
    return next(e);
  }
});

//Get professor information by id
router.get("/:id", async (req, res, next) => {
  try {
    const professor = await Professor.getById(req.params.id);
    return res.json(professor);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;