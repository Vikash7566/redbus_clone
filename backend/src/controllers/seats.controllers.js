const Seats = require('../models/seats.models');
const bookingRecords = require('../models/bookingDetails.models');

const getSeatsAvailability = async (req, res) => {
  const seats = await Seats.find({});
  try {
    if (seats.length > 0) {
      return res
        .status(200)
        .json({ seats: seats, success: true, message: 'successfully fetch' });
    } else {
      return res
        .status(400)
        .json({ seats: seats, success: false, message: 'Failed to fetch' });
    }
  } catch (err) {
    console.log('err', err);
  }
};

const seatBooking = (req, res) => {
  try {
  } catch (err) {
    console.log('Err', err);
  }
};

module.exports = { getSeatsAvailability };
