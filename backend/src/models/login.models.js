const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LoginData", LoginSchema);
