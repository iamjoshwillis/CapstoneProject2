const db = require("../db");
const ExpressError = require("../expressError");

class User {
  //Get data on all users
  static async getAll() {
    let result = await db.query("SELECT * FROM users");
    return result.rows;
  }
  //Get data on one user by ID
  static async getById(id) {
    const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      throw new ExpressError("User not found", 404);
    }
    return result.rows[0];
  }
  //New user registration
  static async create(username, bio, email, password) {
    const result = await db.query(
      `INSERT INTO users (username, bio, email, password) 
        VALUES ($1, $2, $3, $4)
        RETURNING username, bio, email, password`,
      [username, bio, email, password]
    );
    return result.rows[0];
  }
  //Sort new user into one of the four Hogwarts Houses
  static async sortingHat(id) {
    let value = Math.floor(Math.random() * 4);
    const result = await db.query(
      `UPDATE users SET house = $1 WHERE id = $2`, 
      [value, id]
    );
    return result.rows[0];
  }
}

module.exports = User;
