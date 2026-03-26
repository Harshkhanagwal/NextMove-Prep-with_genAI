const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password : {
      type : String,
      required : true
    }
  },
  {
    timestamps: true
  }
);


userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
