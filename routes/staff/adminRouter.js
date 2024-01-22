const express = require("express");
const {
  registerAdminController,
  loginAdminController,
  getAllAdminController,
  getSingleAdminController,
  updateAdminController,
  deleteAdminController,
  adminSuspendTeacherController,
  adminUnsuspendTeacherController,
  adminWithdrawTeacherController,
  adminUnwithdrawTeacherController,
  adminUnpublishResultsController,
  adminPublishResultsController,
} = require("../../controllers/staff/adminController");

const adminRouter = express.Router();

// register
adminRouter.post("/register", registerAdminController);

// login
adminRouter.post("/login", loginAdminController);

// get all admins
adminRouter.get("/", getAllAdminController);

// get single admin
adminRouter.get("/:id", getSingleAdminController);

// update admin
adminRouter.put("/:id", updateAdminController);

// delete admin
adminRouter.delete("/:id", deleteAdminController);

// suspend
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherController);

// unsuspend
adminRouter.put("/unsuspend/teacher/:id", adminUnsuspendTeacherController);

// withdraw
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherController);

// unwithdraw
adminRouter.put("/unwithdraw/teacher/:id", adminUnwithdrawTeacherController);

// publish exam results
adminRouter.put("/publish/exam/:id", adminPublishResultsController);

// unpublish exam results
adminRouter.put("/unpublish/exam/:id", adminUnpublishResultsController);

module.exports = adminRouter;
