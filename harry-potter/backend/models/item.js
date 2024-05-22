const db = require("../db");
const ExpressError = require("../expressError");

class Item {
  //Get all data on all items
  static async getAll() {
    let result = await db.query("SELECT * FROM items");
    return result.rows;
  }
  //Get data on a item by its id
  static async getById(id) {
    const result = await db.query(`SELECT * FROM items WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      throw new ExpressError("Item not found", 404);
    }
    return result.rows[0];
  }
}

module.exports = Item;