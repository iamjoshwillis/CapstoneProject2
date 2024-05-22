const jwt = require("jwt-decode");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../expressError");
const ExpressError = require("../expressError");

//Middleware for Authenticating User
function authenticateJWT(req, res, next) {
  try {
    const payload = jwt.verify(req.body._token, SECRET_KEY);
    req.user = payload;
    return next();
  } catch (err) {
    return next();
  }
}

//Middleware to ensure user is logged in
function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    const e = new ExpressError("Unauthorized", 401);
    return next(e);
  } else {
    return next(err);
  }
}
 
//Middleware to ensure user is correct user
function ensureCorrectUser(req, res, next) {
  try {
    const user = res.locals.user;
    if (!(user && (user.isAdmin || user.username === req.params.username))) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  authenticateJWT,
  ensureLoggedIn,
  ensureCorrectUser,
};
