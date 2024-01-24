const AsyncHandler = require("express-async-handler");
const Admin = require("../../models/staff/Admin");
// @desc   Register Admin
// @route  POST /api/v1/admins/register
// @access Private
exports.registerAdminController = async (req, res) => {
  const { name, email, password, role } = req.body;

  // check if email exists
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    res.json("Admin Exists");
  }
  // register
  const user = await Admin.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    status: "success",
    data: "Admin has been registered",
  });
};

// @desc   Login Admin
// @route  POST /api/v1/admins/login
// @access Private
exports.loginAdminController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    if (user && (await user.verifyPassword(password))) {
      // save the user into req obj
      req.userAuth = user;
      return res.json({ data: user });
    } else {
      return res.json({ message: "Invalid login credentials" });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

// @desc   Get All Admins
// @route  GET /api/v1/admins
// @access Private
exports.getAllAdminController = (req, res) => {
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
};

// @desc   Get Single Admin
// @route  GET /api/v1/admins/:id
// @access Private
exports.getSingleAdminController = (req, res) => {
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
};

// @desc   Update Admin
// @route  PUT /api/v1/admins/:id
// @access Private
exports.updateAdminController = (req, res) => {
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
};

// @desc   Delete Admin
// @route  DELETE /api/v1/admins/:id
// @access Private
exports.deleteAdminController = (req, res) => {
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
};

// @desc   Suspend Teacher
// @route  PUT /api/v1/admins/suspend/teacher/:id
// @access Private
exports.adminSuspendTeacherController = (req, res) => {
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
};

// @desc   Unsuspend Teacher
// @route  PUT /api/v1/admins/unsuspend/teacher/:id
// @access Private
exports.adminUnsuspendTeacherController = (req, res) => {
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
};

// @desc   Withdraw Teacher
// @route  PUT /api/v1/admins/withdraw/teacher/:id
// @access Private
exports.adminWithdrawTeacherController = (req, res) => {
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
};

// @desc   Unwithdraw Teacher
// @route  PUT /api/v1/admins/unwithdraw/teacher/:id
// @access Private
exports.adminUnwithdrawTeacherController = (req, res) => {
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
};

// @desc   Publish Results
// @route  PUT /api/v1/admins/publish/exam/:id
// @access Private
exports.adminPublishResultsController = (req, res) => {
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
};

// @desc   Unpublish Results
// @route  PUT /api/v1/admins/unpublish/exam/:id
// @access Private
exports.adminUnpublishResultsController = (req, res) => {
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
};
