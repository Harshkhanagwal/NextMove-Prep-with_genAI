const express = require("express");
const {
  createInterviewReport,
  deleteInterviewReport,
  getDemoInterviewReport,
  getDemoInterviewReportJson,
  getInterviewReportById,
  getInterviewReports,
} = require("../controllers/interviewController.js");
const protect = require("../middleware/authMiddleware.js");
const { handleResumeUpload } = require("../middleware/fileMiddleware.js");

const router = express.Router();

router.get("/demo",getDemoInterviewReport);
router.get("/demo-json", protect, getDemoInterviewReportJson);
router.get("/", protect, getInterviewReports);
router.get("/:id", protect, getInterviewReportById);
router.post("/generate", protect, handleResumeUpload, createInterviewReport);
router.delete("/:id", protect, deleteInterviewReport);

module.exports = router;
