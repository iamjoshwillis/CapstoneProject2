const db = require("../db");
const ExpressError = require("../expressError");

class Professor {
    //Get all information on all professors
    static async getAll() {
        let result = await db.query("SELECT * FROM professors");
        return result.rows;
    }
    //Get information on professors by its id
    static async getById(id) {
        const result = await db.query(`SELECT * FROM professors WHERE id = $1`, [id]);
        if (result.rows.length === 0) {
            throw new ExpressError("Professor not found", 404);
        }
        return result.rows[0];
    }
}

module.exports = Professor;