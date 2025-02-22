import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login User
const loginUser = async(req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"user does not exists"})
        }
        const matchPassword = await bcrypt.compare(password,user.password)
        if(!matchPassword){
            return res.json({success:false, message:"incorrect password !"})
        }
        const token = createToken(user._id)
        res.json({success:true, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }

}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{ expiresIn: "7d" } )
}

// add new user
const registerUser = async(req, res) =>{
    const {name,email,password} = req.body;
    try {
        // checking for already exitance of user
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({
                success:false,
                message: "user already exits"
            })
        }

        // validate email format and password length

        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message: "please enter valid email address"
            }) 
        }

        if(password.length < 8){
            return res.json({
                success:false,
                message: "please enter valid strong password "
            }) 
        }
        // hashing password 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel ({
            name:name,
            email:email,
            password:hashPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }

}


export {loginUser, registerUser}    