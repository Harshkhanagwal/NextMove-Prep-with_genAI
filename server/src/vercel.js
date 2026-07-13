const app = require("./app.js");
const connectDB = require("./config/db.js");

let isDbConnected = false;

module.exports = async (req, res) => {
  if (!isDbConnected) {
    const mongoUri = process.env.MONGODB_URI || "";

    if (!mongoUri) {
      console.warn("MONGODB_URI is not set. Starting serverless function without MongoDB.");
    } else {
      try {
        await connectDB(mongoUri);
        isDbConnected = true;
      } catch (error) {
        console.error("MongoDB connection failed. Continuing so Express can return CORS-aware errors.", error);
      }
    }
  }

  return app(req, res);
};
