const express = require('express');
const seatsControllers = require('../controllers/seats.controllers');
const router = express();
router.use(express.json());

router.get('/getSeats', seatsControllers.getSeatsAvailability);
// router.post('/seatBook', seatsControllers.seatBooking);

module.exports = router;
