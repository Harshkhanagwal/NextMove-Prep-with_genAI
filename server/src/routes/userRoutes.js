import { Router } from "express";
import { createUser, getCurrentUser, login, logout } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";


const router = Router()


router.post("/create-user", createUser )
router.post("/login", login)
router.post("/logout", protect, logout)
router.get("/me", protect, getCurrentUser)


export default router
