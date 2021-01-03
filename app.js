const express= require('express');
const mongoose=require("mongoose");
const authRoute=require('./routes/auth');
const app=express();

mongoose.connect("mongodb+srv://artem:987654321@cluster0.nhlkv.mongodb.net/MongoDataExample?retryWrites=true&w=majority")
    .then(()=>console.log("connecting MongoDB"))

app.use('/api/auth',authRoute)
module.exports=app;