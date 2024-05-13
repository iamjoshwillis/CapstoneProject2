const express = require("express");
const db = require("../db");
const Course = require("../models/course");

const router = new express.Router();

//Get all courses and all information
router.get("/", async (req, res, next) => {
  try {
    const course = await Course.getAll();
    return res.json(course);
  } catch (e) {
    return next(e);
  }
});

//Get course information by id
router.get("/:id", async (req, res, next) => {
  try {
    const course = await Course.getById(req.params.id);
    return res.json(course);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;