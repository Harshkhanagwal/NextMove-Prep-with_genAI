const User = require("../models/User.js");
const BlacklistedToken = require("../models/BlacklistedToken.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken.js");
const {
  getClearTokenCookieOptions,
  getTokenCookieOptions,
  getTokenFromRequest,
} = require("../utils/auth.js");

const sanitizeUser = (userDocument) => {
    const userRes = userDocument.toObject();
    delete userRes.password;
    return userRes;
}

const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "Can't create user, email already exists",
            });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashpassword,
        });

        const userRes = sanitizeUser(newUser);
        const token = generateToken(userRes._id);

        res.cookie("token", token, getTokenCookieOptions());

        return res.status(201).json({
            success: true,
            user: userRes,
            message : "Account created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
        });
    }
};


const login = async (req, res) => {
    try {
        if (!req.body?.email) return res.status(404).json({message : "Please provide email"})
        if (!req.body?.password) return res.status(404).json({message : "Please provide password"})
            
        const { email, password } = req.body;


        const isUser = await User.findOne({ email })

        if (!isUser) {
            return res.status(400).json({
                message: "Invalid Email, User not found"
            })
        }

        const isMatch = await isUser.comparePassword(password)

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        const userRes = sanitizeUser(isUser);
        const token = generateToken(isUser._id);

        res.cookie("token", token, getTokenCookieOptions());

        return res.status(200).json({
            message: "Login successful",
            user: userRes
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getCurrentUser = async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user,
    });
}

const logout = async (req, res) => {
    try {
        const token = req.token || getTokenFromRequest(req);

        if (!token) {
            return res.status(400).json({
                message: "Token is required for logout"
            });
        }

        const decoded = jwt.decode(token);

        if (!decoded?.exp) {
            return res.status(400).json({
                message: "Invalid token"
            });
        }

        await BlacklistedToken.findOneAndUpdate(
            { token },
            {
                token,
                expiresAt: new Date(decoded.exp * 1000),
            },
            {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true,
            }
        );

        res.clearCookie("token", getClearTokenCookieOptions());

        return res.status(200).json({
            success: true,
            message: "Logout successful. Token blacklisted."
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error"
        });
    }
}

module.exports = { createUser, login, getCurrentUser, logout };
