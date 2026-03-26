const app = require("./app.js");
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || "";

const startServer = async () => {
  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not set. Starting server without MongoDB.");
  } else {
    try {
      await connectDB(MONGODB_URI);
    } catch (error) {
      console.error("MongoDB connection failed. Starting server without database.", error);
    }
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
