const express = require("express");
const { createUser, getCurrentUser, login, logout } = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js");


const router = express.Router();


router.post("/create-user", createUser )
router.post("/login", login)
router.post("/logout", protect, logout)
router.get("/me", protect, getCurrentUser)


module.exports = router;
