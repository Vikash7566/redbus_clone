const Seats = require("../models/seats.models");
const bookingRecords = require("../models/bookingDetails.models");


const getSeatsAvailability = async (req, res) => {
  const seats = await Seats.find({});
  try {
    if (seats.length > 0) {
      return res
        .status(200)
        .json({ seats: seats, success: true, message: "successfully fetch" });
    } else {
      return res
        .status(400)
        .json({ seats: seats, success: false, message: "Failed to fetch" });
    }
  } catch (err) {
    console.log("err", err);
  }
};

const seatBooking = async (req, res) => {  
  console.log("called")
  console.log("req.body",req?.body)
  try {
    const { name, surname, mobileNumber, seatNumber, state, age, gender, price } =
      req?.body;
      
      if (!name || !surname || !mobileNumber || !seatNumber || !state || !age || !gender || !price) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required!',
        });
      }
  

      if (!name ) {
        return res.status(400).json({
          success: false,
          message: 'Name is required!',
        });
      }

      if (!surname ) {
        return res.status(400).json({
          success: false,
          message: 'surname is required!',
        });
      }
      if (!mobileNumber ) {
        return res.status(400).json({
          success: false,
          message: 'mobile Number is required!',
        });
      }
      if (!seatNumber ) {
        return res.status(400).json({
          success: false,
          message: 'select a seat',
        });
      }
      if (!state ) {
        return res.status(400).json({
          success: false,
          message: 'state is require',
        });
      }
      if (!age ) {
        return res.status(400).json({
          success: false,
          message: 'age is require',
        });
      }
      if (!gender ) {
        return res.status(400).json({
          success: false,
          message: 'gender is require',
        });
      }
      if (!price ) {
        return res.status(400).json({
          success: false,
          message: 'price is require',
        });
      }

      const updateSeat = await Seats.findOneAndUpdate({ seatNumber :seatNumber }, { $set: { isBooked: true } })
     
      if (!updateSeat) {
        return res.status(404).json({
          success: false,
          message: "Seat not found or already booked",
        });
      }

      const bookingDetails = new bookingRecords({
        name, surname, mobileNumber, seatNumber, state, age, gender, price
      }) 
     const bookingData =  await bookingDetails.save()
      return res.status(200).json({
        success: true,
        message: 'Ticket Booked Successfully!',
        user: bookingData,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while booking the seat',
      error: err.message,
    });
  }
};

module.exports = { getSeatsAvailability,seatBooking };
