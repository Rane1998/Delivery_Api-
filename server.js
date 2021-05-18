
require('dotenv').config({path:"./config.env"});
const express = require ('express');
const mongoose = require('mongoose');
const connectDB = require ('./config/db');

// Routes
const deliveryRoutes = require ('./routes/api/delivery');


const app = express();
//Bodyparser middleware
app.use(express.json());

// Connect to the DB
connectDB();

// use routes
app.use('/api/delivery',deliveryRoutes);
const PORT = process.env.PORT||5000;
app.listen(PORT,() => console.log ('Server run at port ' +PORT));

//