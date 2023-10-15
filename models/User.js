const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    location: { type: "string" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
