const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
const globalErrorHandler = require("../middlewares/globalErrorHandler")

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/admins", adminRouter);



module.exports = app;
