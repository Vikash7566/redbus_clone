require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/redbus_backend');
const express = require('express');
const app = express();

const port = 3000;
const userRoute = require('./routes/user.routes');
app.use('/api', userRoute);
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
