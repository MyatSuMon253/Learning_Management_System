const Admin = require("../models/staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
  // get token from header
  const headerObj = req.headers;
  const token = headerObj?.authorization?.split(" ")[1];

  // verify token
  const verifiedToken = verifyToken(token);
  if (verifiedToken) {
    // find the user
    const user = await Admin.findById(verifiedToken.id).select(
      "name email role"
    );
    // save the user into req.obj
    req.userAuth = user;
    next();
  } else {
    const error = new Error("Token expired/invalid");
    next(error);
  }
};

module.exports = isLogin;
