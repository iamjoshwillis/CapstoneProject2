const pg = require("pg");

const db = new pg.Client("postgresql:///potter")

db.connect();

module.exports = db;