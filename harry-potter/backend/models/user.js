const db = require("../db");
const ExpressError = require("../expressError");

class User {
  //Get data on all users
  static async getAll() {
    let result = await db.query("SELECT * FROM users");
    return result.rows;
  }
  //Get data on one user by username
  static async getByUsername(username) {
    const result = await db.query(`SELECT * FROM users WHERE username = $1`, [username]);
    if (result.rows.length === 0) {
      throw new ExpressError("User not found", 404);
    }
    return result.rows[0];
  }
  
  //New user registration
  static async create(username, first_name, last_name, house, bio, email, password) {
    const result = await db.query(
      `INSERT INTO users (username, first_name, last_name, house, bio, email, password) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING username, bio, email, password`,
      [username, first_name, last_name, house, bio, email, password]
    );
    return result.rows[0];
  }
}

module.exports = User;
