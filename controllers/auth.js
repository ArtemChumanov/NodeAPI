const User=require('../models/User')
const jwt = require("jsonwebtoken");
module.exports.register=async function(req, res) {
    if (!req.body) return res.sendStatus(400);
    const candidate= await User.findOne({email:req.body.email})
    console.log(candidate)
    if(candidate){
        res.status(409).json("This user already exists")
    }
    else{
        const user= new User({
            email:req.body.email,
            password:req.body.password
        })
        try{
            await user.save();
            res.status(201).json(user)
        }catch (e) {

        }
    }}

    module.exports.auth=async function(req,res){
    const candidate=await User.findOne({email:req.body.email,password:req.body.password})
        if(candidate){
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, "1234", {expiresIn: 60 * 60})
res.status(200).json({
    token:`Bearer ${token}`
})
        }else{
            res.status(401).json({
                message:"Error auth!!!"
            })
        }
    }
// const User=require('../models/User')
//
// module.exports.register=async function(res,req){
//     console.log("df")
//     //const candidate=await User.findOne({email:req.body.email})
//     console.log("df33")
//     // if(!candidate){
//        // const password=req.body.password;
//         const user=new User({
//             email:req.body.email,
//             password:req.body.password
//         })
//         try{
//             await user.save();
//             res.status(201).json(user)
//         }catch (error){
//             res.status(500).json({
//                 success: false,
//                 message: error.message ? error.message : error
//             })
//         }
//     // }
// }