require('dotenv').config();
const workoutRoutes = require('./routes/workouts')
const express = require('express');

// initiate express app & database
const app = express();
const mongoose = require('mongoose')

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// route
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to database");

    // listen to the port
    app.listen(process.env.PORT, () => {
        console.log('Listening on port 4000');
    })
}).catch(err => {
    console.log(err);
})