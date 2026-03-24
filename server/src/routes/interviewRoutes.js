import { Router } from "express";
import {
  createInterviewReport,
  getDemoInterviewReport,
} from "../controllers/interviewController.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

router.get("/demo", getDemoInterviewReport);
router.post("/generate", protect, createInterviewReport);

export default router;
