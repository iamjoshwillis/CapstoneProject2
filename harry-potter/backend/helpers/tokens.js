const jwt = require("jsonwebtoken");

/** return signed JWT from user data. */
const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

function createToken(user) {
  
  let payload = {
    username: user.username
  };

  return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createToken };
