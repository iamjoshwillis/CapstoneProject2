const express = require("express");
const db = require("../db");
const Spell = require("../models/spell");

const router = new express.Router();

//Get all data for all spells from API
router.get("/", async (req, res, next) => {
    try {
        const spells = await Spell.getAll();
        return res.json(spells);
    } catch (e) {
        return next(e);
    }
});

//Get spell information by name
router.get("/:id", async (req, res, next) => {
    try {
        const spell = await Spell.getById(req.params.id);
        return res.json(spell);
    } catch (e) {
        return next(e);
    }
});

//

module.exports = router;