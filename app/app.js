const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

// middleware
app.use(morgan("dev"));

// admin register
app.use("/api/v1/admins", adminRouter);

module.exports = app;
