const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async (mongoUri) => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true;
    return mongoose.connection;
  }

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 5000,
  });
  isConnected = true;
  console.log("MongoDB connected");
};

module.exports = connectDB;
