const jwt = require("jsonwebtoken");
const BlacklistedToken = require("../models/BlacklistedToken.js");
const User = require("../models/User.js");
const { getTokenFromRequest } = require("../utils/auth.js");

const protect = async (req, res, next) => {
  try {
    const jwtSecret = process.env.JWT_SECRET || process.env.jwtSecret;
    const token = getTokenFromRequest(req);

    if (!token) {
      return res.status(401).json({
        message: "Authentication token is required",
      });
    }

    const blacklistedToken = await BlacklistedToken.findOne({ token });

    if (blacklistedToken) {
      return res.status(401).json({
        message: "Token is no longer valid",
      });
    }

    const decoded = jwt.verify(token, jwtSecret);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = protect;
