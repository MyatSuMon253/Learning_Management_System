const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, "any_key", (err, decoded) => {
    if (err) {
      return { message: "Invalid Token" };
    } else {
      return decoded;
    }
  });
};

module.exports = verifyToken;