const db = require("../db");
const ExpressError = require("../expressError");

class Course {
    //Get all information on all courses
    static async getAll() {
        let result = await db.query("SELECT * FROM courses");
        return result.rows;
    }
    //Get information on course by its id
    static async getById(id) {
        const result = await db.query(`SELECT * FROM courses WHERE id = $1`, [id]);
        if (result.rows.length === 0) {
            throw new ExpressError("Course not found", 404);
        }
        return result.rows[0];
    }
}

module.exports = Course;

