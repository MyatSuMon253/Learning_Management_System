const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/admins", adminRouter);

// error handler middleware
app.use((req, res, next, err) => {
  const stack = err.stack;
  const message = err.message;
  const status = err.status || "failed";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status,
    message,
    stack
  })
})

module.exports = app;
