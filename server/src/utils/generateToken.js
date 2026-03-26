const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const jwtSecret = process.env.JWT_SECRET || process.env.jwtSecret;

  return jwt.sign({ id: userId }, jwtSecret, {
    expiresIn: "7d"
  });
};

module.exports = { generateToken };
