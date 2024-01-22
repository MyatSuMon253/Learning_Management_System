const express = require("express");

const adminRouter = express.Router();

// register
adminRouter.post("/register", (req, res) => {
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

// login
adminRouter.post("/login", (req, res) => {
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

// get all admins
adminRouter.get("/", (req, res) => {
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
adminRouter.get("/:id", (req, res) => {
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
adminRouter.put("/:id", (req, res) => {
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
adminRouter.delete("/:id", (req, res) => {
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

// suspend
adminRouter.put("/suspend/teacher/:id", (req, res) => {
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

// unsuspend
adminRouter.put("/unsuspend/teacher/:id", (req, res) => {
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

// withdraw
adminRouter.put("/withdraw/teacher/:id", (req, res) => {
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

// unwithdraw
adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Admin has unwithdraw a teacher",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// publish exam results
adminRouter.put("/publish/exam/:id", (req, res) => {
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

// unpublish exam results
adminRouter.put("/unpublish/exam/:id", (req, res) => {
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

module.exports = adminRouter;
