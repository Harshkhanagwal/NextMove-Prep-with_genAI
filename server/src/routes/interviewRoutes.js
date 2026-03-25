import { Router } from "express";
import {
  createInterviewReport,
  deleteInterviewReport,
  getDemoInterviewReport,
  getDemoInterviewReportJson,
  getInterviewReportById,
  getInterviewReports,
} from "../controllers/interviewController.js";
import protect from "../middleware/authMiddleware.js";
import { handleResumeUpload } from "../middleware/fileMiddleware.js";

const router = Router();

router.get("/demo",getDemoInterviewReport);
router.get("/demo-json", protect, getDemoInterviewReportJson);
router.get("/", protect, getInterviewReports);
router.get("/:id", protect, getInterviewReportById);
router.post("/generate", protect, handleResumeUpload, createInterviewReport);
router.delete("/:id", protect, deleteInterviewReport);

export default router;
