const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    min: 3,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    // unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    min: 6,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
