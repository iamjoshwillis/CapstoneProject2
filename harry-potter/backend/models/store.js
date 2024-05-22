const db = require("../db");
const ExpressError = require("../expressError");

class Store {
  //Get all data on all stores
  static async getAll() {
    let result = await db.query("SELECT * FROM stores");
    return result.rows;
  }
}

module.exports = Store;