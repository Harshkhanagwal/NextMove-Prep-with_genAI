import mongoose from "mongoose";

const connectDB = async (mongoUri) => {
  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");
};

export default connectDB;
