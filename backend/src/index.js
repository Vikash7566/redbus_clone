require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/redbus_backend');
const express = require('express');
const app = express();

const port = 3000;
const userRoute = require('./routes/user.routes');
const seatsRoute = require('./routes/seats.routes');
app.use('/api/user', userRoute);
app.use('/api/seats', seatsRoute);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
