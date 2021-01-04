const  express=require('express');
const controller=require('../controllers/order')
const bodyParser = require("body-parser");
const passport = require('passport')
const jsonParser = bodyParser.json();
const router=express.Router();


router.post('/create', passport.authenticate('jwt', {session: false}),jsonParser,controller.create)
module.exports=router