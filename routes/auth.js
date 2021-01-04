const  express=require('express');
const controller=require('../controllers/auth')
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const router=express.Router();

router.post('/register',jsonParser,controller.register)
router.post('/auth',jsonParser,controller.auth)
 module.exports=router;