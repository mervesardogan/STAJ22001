// app.js
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const busRoutes = require('./api/routes/busRoutes');
const stopRoutes = require('./api/routes/stopRoutes');
const scheduleRoutes = require('./api/routes/scheduleRoutes');
const userRoutes = require('./api/routes/userRoutes');
const errorHandler = require('./api/utils/errorHandler');



// Middleware
app.use(bodyParser.json());
app.use('/buses', busRoutes);
app.use('/stops', stopRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/users', userRoutes);
app.use(errorHandler);




mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb+srv://username:' +
    process.env.MONGO_ATLAS_PW + 
    'mongodbconnectionstring',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
        }
        next();
});


module.exports = app;
