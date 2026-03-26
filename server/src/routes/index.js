const express = require("express");
const healthRoutes = require("./healthRoutes.js");
const interviewRoutes = require("./interviewRoutes.js");
const user = require("./userRoutes.js");
const router = express.Router();

router.use("/health", healthRoutes);
router.use("/user", user)
router.use("/interview-report", interviewRoutes);

module.exports = router;
