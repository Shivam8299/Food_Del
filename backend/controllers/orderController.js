import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'
import 'dotenv/config'; 
// placing user order


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// console.log("stripe key",process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req,res)=>{
    const frontendUrl = "http://localhost:5174"
    try {
        const newOrder  = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

        const lineItems = req.body.items.map((item)=>({
            price_data :{
                currency:'inr',
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        lineItems.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:'delivery charges'
                },
                unit_amount:2*100*88
            },
            quantity:1
        })
        const session = await stripe.checkout.sessions.create({
            line_items:lineItems,
            mode:'payment',
            success_url:`${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontendUrl}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({success:true, success_url:session.url})

    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
    }
}


export {placeOrder}