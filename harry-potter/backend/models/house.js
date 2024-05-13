const db = require("../db");
const ExpressError = require("../expressError");

class House {
  //Get all data on all houses
  static async getAll() {
    let result = await db.query("SELECT * FROM houses");
    return result.rows;
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

module.exports = House;