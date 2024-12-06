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
    type: Number,
    unique: true,
    require: true,
  },
  seatNumber: {
    type: Number,
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
    type: Boolean,
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
