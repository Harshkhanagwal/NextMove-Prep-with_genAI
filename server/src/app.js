require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db.js");
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");
const apiRouter = require("./routes/index.js");

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "";
const allowedOrigins = (
  process.env.CLIENT_URLS ||
  process.env.CLIENT_URL ||
  "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api", apiRouter);
app.use(notFound);
app.use(errorHandler);

let dbInitPromise;

const initApp = async () => {
  if (dbInitPromise) {
    return dbInitPromise;
  }

  dbInitPromise = (async () => {
    if (!MONGODB_URI) {
      console.warn("MONGODB_URI is not set. Starting server without MongoDB.");
      return;
    }

    try {
      await connectDB(MONGODB_URI);
    } catch (error) {
      console.error("MongoDB connection failed. Starting server without database.", error);
    }
  })();

  return dbInitPromise;
};

module.exports = app;
module.exports.initApp = initApp;
