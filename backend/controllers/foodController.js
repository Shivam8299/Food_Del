import { response } from "express";
import foodModel from "../models/foodModel.js";
import fs, { truncate } from "fs" 


// for adding foodItem
const addFood = async(req, res)=>{
    const imageFilename = `${req.file.filename}`

    const food  = new foodModel({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        image:imageFilename,
    })
    try {
        const response = await food.save()
        res.status(200).json({success:true, message:"food added successfully"})
        console.log(response)
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
    }
}


// get all the list of food item
const listFood = async(req, res)=>{
    try {
        const foods = await foodModel.find({})
        res.status(200).json({succes:true, data:foods})

    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
    }
}

const removeFoodItems = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        const response = await foodModel.findByIdAndDelete(req.body.id)
        res.status(200).json({succes:true, message: "delete item successfully"})
        console.log(response)

    }catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
    }
}

export{addFood,listFood, removeFoodItems}