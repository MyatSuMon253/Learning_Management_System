const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "any_key", { expiresIn: "5d" });
};

module.exports = generateToken;
