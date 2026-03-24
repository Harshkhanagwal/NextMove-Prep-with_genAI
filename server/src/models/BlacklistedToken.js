import mongoose from "mongoose";

const blacklistedTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const BlacklistedToken =
  mongoose.models.BlacklistedToken ||
  mongoose.model("BlacklistedToken", blacklistedTokenSchema);

export default BlacklistedToken;
