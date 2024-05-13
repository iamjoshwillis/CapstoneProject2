const express = require("express");
const usersRoutes = require("./routes/users");
const housesRoutes = require("./routes/houses");
const coursesRoutes = require("./routes/courses");
const spellsRoutes = require("./routes/spells");

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/houses", housesRoutes);
app.use("/courses", coursesRoutes);
app.use("/spells", spellsRoutes);


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
