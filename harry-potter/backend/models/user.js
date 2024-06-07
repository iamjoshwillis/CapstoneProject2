const db = require("../db");
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

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
  static async register({username, first_name, last_name, bio, email, password}) {
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users (username, first_name, last_name, bio, email, password) 
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING username, first_name, last_name, bio, email`,
      [username, first_name, last_name, bio, email, hashedPassword]
    );
    const user = result.rows[0];
    return user;
  }

  //Sort User Into House
  static async sort(username) {
    const house = Math.floor(Math.random() * 4) + 1;
    const result = await db.query(
      `UPDATE users SET house = $1 WHERE username = $2 RETURNING username, first_name, last_name, bio, house`,
      [house, username],
    );
    return result.rows[0];
  }
}

module.exports = User;
