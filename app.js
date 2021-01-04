const express= require('express');
const mongoose=require("mongoose");
const authRoute=require('./routes/auth');
const orderRoute=require('./routes/order');
const passport = require('passport')
const app=express();




mongoose.connect("mongodb+srv://artem:12345@cluster0.sewzs.mongodb.net/Mongo?retryWrites=true&w=majority")
    .then(()=>console.log("connecting MongoDB"))
    .catch(()=>console.log("Mongo Disconnect"))
app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use('/api/auth',authRoute);
app.use('/api',orderRoute);

module.exports=app;