require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");
const apiRouter = require("./routes/index.js");

const app = express();
const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://next-move-prep-with-gen-ai.vercel.app",
];

const normalizeOrigin = (origin) => {
  try {
    return new URL(origin).origin;
  } catch (_error) {
    return origin.replace(/\/$/, "");
  }
};

const configuredAllowedOrigins = [
  process.env.CLIENT_URLS,
  process.env.CLIENT_URL,
]
  .filter(Boolean)
  .flatMap((value) => value.split(","))
  .map((origin) => normalizeOrigin(origin.trim()))
  .filter(Boolean);

const allowedOrigins = new Set([
  ...defaultAllowedOrigins.map(normalizeOrigin),
  ...configuredAllowedOrigins,
]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(normalizeOrigin(origin))) {
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

module.exports = app;
