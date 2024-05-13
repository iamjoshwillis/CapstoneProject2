const db = require("../db");
const axios = require("axios");
const ExpressError = require("../expressError");

BASE_URL = 'https://hp-api.onrender.com/api/spells';


class Spell {
  //Get all data on all spells from API
  static async getAll() {
    try {
        const response = await axios.get(`${BASE_URL}`);
        res.json(response.data);
    } catch (e) {
        return next(e);
    }
  }
  //Get data on a house by its id
  static async getById(id) {
    const result = await db.query(`SELECT * FROM houses WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      throw new ExpressError("House not found", 404);
    }
    return result.rows[0];
  }
}

module.exports = Spell;