import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

// placing user order

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req,res)=>{
    // try {
    //     const newOrder  = new orderModel({
    //         userId: req.body.userId,
    //         items: req.body.items,
    //         ammount:req.body.ammount,
    //         address:req.body.address
    //     })
    //     await newOrder.save()
    //     await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
    // } catch (error) {
        
    // }

}


export {placeOrder}