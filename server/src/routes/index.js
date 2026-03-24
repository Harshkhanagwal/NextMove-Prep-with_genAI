import { Router } from "express";
import healthRoutes from "./healthRoutes.js";
import interviewRoutes from "./interviewRoutes.js";
import user from './userRoutes.js'
const router = Router();

router.use("/health", healthRoutes);
router.use("/user", user)
router.use("/interview-report", interviewRoutes);

export default router;
