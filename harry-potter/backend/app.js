const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authenticateJWT } = require("./middleware/auth")

const usersRoutes = require("./routes/users");
const housesRoutes = require("./routes/houses");
const coursesRoutes = require("./routes/courses");
const spellsRoutes = require("./routes/spells");
const professorsRoutes = require("./routes/professors");
const itemsRoutes = require("./routes/items");
const authRoutes = require("./routes/auth");
const storesRoutes = require("./routes/stores")

const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticateJWT);

app.use("/users", usersRoutes);
app.use("/houses", housesRoutes);
app.use("/courses", coursesRoutes);
app.use("/professors", professorsRoutes);
app.use("/spells", spellsRoutes);
app.use("/items", itemsRoutes);
app.use("/auth", authRoutes);
app.use("/stores", storesRoutes)


//404 Handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

// General Error Handler
app.use(function (err, req, res, next) {
  let status = err.status || 500;

  return res.status(status).json({
    error: {
      message: err.message,
      status: status,
    },
  });
});

module.exports = app;
