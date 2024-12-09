require('dotenv').config();
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json()); 
const userRoute = require('./routes/user.routes');
const seatsRoute = require('./routes/seats.routes');


app.get('/', (req, res) => {
  res.send('Welcome to Redbus API');
});

app.use('/api/user', userRoute);
app.use('/api/seats', seatsRoute);


const uri = process.env.MONGODB_DB_URI; 

async function connectToCluster() {
  const client = new MongoClient(uri);

  try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));
    console.log("Connected to MongoDB Atlas cluster");

    // Access a database
  } finally {
    await client.close();
  }
}

connectToCluster().catch(console.error);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
