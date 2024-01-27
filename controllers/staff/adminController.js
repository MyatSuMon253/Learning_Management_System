const AsyncHandler = require("express-async-handler");
const Admin = require("../../models/staff/Admin");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

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
exports.loginAdminController = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  if (user && (await user.verifyPassword(password))) {
    const token = generateToken(user._id);
    const verify = verifyToken(token);

    return res.json({ data: token, user, verify });
  } else {
    return res.json({ message: "Invalid login credentials" });
  }
});

// @desc   Get All Admins
// @route  GET /api/v1/admins
// @access Private
exports.getAllAdminController = AsyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({
    status: "success",
    message: "Admins retrieved successfully",
    data: admins,
  });
});

// @desc   Get Single Admin
// @route  GET /api/v1/admins/:id
// @access Private
exports.getAdminProfileController = AsyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth._id);
  if (!admin) {
    throw new Error("Admin not found");
  } else {
    res.status(200).json({
      status: "success",
      message: "Admin retrieved successfully",
      data: admin,
    });
  }
});

// @desc   Update Admin
// @route  PUT /api/v1/admins/:id
// @access Private
exports.updateAdminController = AsyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  // if email is taken
  const emailExist = await Admin.findOne({ email });
  if (emailExist) {
    throw new Error("This email is taken/exist");
  } else {
    // update
    const admin = await Admin.findByIdAndUpdate(req.userAuth._id, {
      email,
      name,
      password,
    }, {
      new: true, 
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      message: "Admin updated successfully",
      data: admin,
    });
  }
});

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
