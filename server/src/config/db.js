import mongoose from "mongoose";

let isConnected = false;

const connectDB = async (mongoUri) => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true;
    return mongoose.connection;
  }

  await mongoose.connect(mongoUri);
  isConnected = true;
  console.log("MongoDB connected");
};

export default connectDB;
