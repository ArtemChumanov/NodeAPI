const Order=require('../models/Order')
module.exports.create=async function(req,res){


    const lastOrder=await Order
        .findOne({user:req.user.id})
        .sort({date:-1})
    console.log(lastOrder)
    const maxOrder=lastOrder?lastOrder.order:0;

    const order=await new Order({
         list: req.body.list,
        user: req.user.id,
        order: maxOrder + 1
    }).save()
    res.status(201).json(order)
}