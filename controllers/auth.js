const User=require('../models/User')

module.exports.register=async function(res,req){
    console.log("df")
    //const candidate=await User.findOne({email:req.body.email})
    console.log("df33")
    // if(!candidate){
       // const password=req.body.password;
        const user=new User({
            email:req.body.email,
            password:req.body.password
        })
        try{
            await user.save();
            res.status(201).json(user)
        }catch (error){
            res.status(500).json({
                success: false,
                message: error.message ? error.message : error
            })
        }
    // }
}