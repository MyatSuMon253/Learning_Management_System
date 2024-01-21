const express = require("express");
const morgan = require("morgan");

const app = express();
// middleware
app.use(morgan("dev"));

// admin register
app.post("api/v1/admins/register", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin login
app.post("api/v1/admins/login", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has been logged in",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// get all admin
app.get("api/v1/admins", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "All Admins",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// get single admin
app.get("api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Single Admin",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// update admin
app.put("api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Update Admin",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// delete admin
app.delete("api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Delete Admin",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin suspending teacher
app.put("api/v1/admins/suspend/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has suspended a teacher",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin unsuspend teacher
app.put("api/v1/admins/unsuspend/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has unsuspend a teacher",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin withdrawing teacher
app.put("api/v1/admins/withdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has withdrawn a teacher",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin unwithdraw teacher
app.put("api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has unwithdrawn a teacher",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin publish exam results
app.put("api/v1/admins/publish/exam/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has published exam results",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// admin unpublish exam results
app.put("api/v1/admins/unpublish/exam/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has unpublished exam results",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = app;
