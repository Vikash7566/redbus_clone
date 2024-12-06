const mongoose = require('mongoose');

const SeatsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  seatNumber: {
    type: String,
    required: true,
    unique: true,
  },
  isBooked: {
    type: Boolean,
    required: true,
  },
  isFemaleOnly: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model('Seats', SeatsSchema);
// { id: 7, number: 'B3', isBooked: false, isFemaleOnly: false },
