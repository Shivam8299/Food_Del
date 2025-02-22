import userModel from "../models/userModel.js"

// add to carts items
const addToCart = async (req,res)=>{
    try {
        const itemId = req.body.itemId
        let userData = await userModel.findOne({_id:req.body.userId});
        // console.log(userData)
        let cartData = userData.cartData;
        // console.log(cartData)
        if(!cartData[itemId]){
            cartData[itemId] = 1;
        }
        else {
            cartData[itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message:"added to the cart! "})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        }) 
    }

}



//remove to cart
const removeFromCart = async (req,res) =>{
     try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData;
        // console.log(cartData)
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -=1 
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message:"removed item from the cart! "})
     } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
     }
}

// fetch user cart Data
const getCartData = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData;
        res.json({success:true, cartData})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

export {addToCart, removeFromCart, getCartData}