const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('LoginData', LoginSchema);
