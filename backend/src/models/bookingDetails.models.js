const mongoose = require('mongoose');

const BookingRecordSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  surName: {
    type: String,
    require: true,
  },
  mobileNumber: {
    type: String,
    unique: true,
    require: true,
  },
  seatNumber: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
module.exports = mongoose.model('BookingRecordSchema', BookingRecordSchema);
