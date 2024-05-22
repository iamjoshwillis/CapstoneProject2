require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "ALOHOMORA!";

const PORT = +process.env.PORT || 3001;

//Database selection depending on environment
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "postgresql:///potter-test"
      : process.env.DATABASE_URL || "postgresql:///potter";
}

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
