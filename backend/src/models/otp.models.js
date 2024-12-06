const mongoose = require('mongoose');
const optSchema = mongoose.Schema({
  type_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
    get: (timestamp) => timestamp.getTime(),
    set: (timestamp) => new Date(timestamp),
  },
});
module.exports = mongoose.modal('Otp', optSchema);
