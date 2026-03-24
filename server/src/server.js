import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import apiRouter from "./routes/index.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || "";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL,
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

const startServer = async () => {
  if (MONGODB_URI) {
    try {
      await connectDB(MONGODB_URI);
    } catch (error) {
      console.error("MongoDB connection failed. Starting server without database.", error);
    }
  } else {
    console.warn("MONGODB_URI is not set. Starting server without MongoDB.");
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
