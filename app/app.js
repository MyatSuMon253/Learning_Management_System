const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
const {
  globalErrorHandler,
  notFoundHandler,
} = require("../middlewares/globalErrorHandler");
const isLogin = require("../middlewares/isLogin")

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/admins", adminRouter);

app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
