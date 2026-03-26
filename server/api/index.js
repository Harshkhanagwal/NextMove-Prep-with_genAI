const app = require("../src/app.js");
const connectDB = require("../src/config/db.js");

let isDbConnected = false;

module.exports = async (req, res) => {
  if (!isDbConnected) {
    const mongoUri = process.env.MONGODB_URI || "";

    if (!mongoUri) {
      console.warn("MONGODB_URI is not set. Starting serverless function without MongoDB.");
    } else {
      await connectDB(mongoUri);
      isDbConnected = true;
    }
  }

  return app(req, res);
};
