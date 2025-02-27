import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from 'axios'

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign-up")
  const [data, setData] = useState({
    name:'',
    email:"",
    password:""
  })

  const {backendUrl,setToken} = useContext(StoreContext)

  const onchangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  const login = async (event) =>{
      event.preventDefault()
      let newUrl = backendUrl
      currentState === "Login" ? newUrl+="/api/user/login" :newUrl+="/api/user/register" 
      const response = await axios.post(newUrl,data)
      console.log(response.data)
      if(response.data.success === true){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
        setShowLogin(false)
        if(currentState === "Sign-up"){
          toast.success("Great choice! Let’s make every meal special. 🍛🍟", {
            position: "top-right", 
            icon: <AiOutlineCheckCircle size={24} className="text-green-600" />, 
          });
        }
        else{
          toast.success("Welcome back! A delicious meal awaits. 🍔🍟", {
            position: "top-right", 
            icon: <AiOutlineCheckCircle size={24} className="text-green-600" />, 
          });
        }
        
      }
      else if(response.data.message === "user already exits"){
        toast.error("⚠️ This email is already registered", {
          position: "top-right", 
        });
      }
      else if(response.data.message === 'please enter valid strong password '){
        toast.error("Password must be at least 8 characters long!", {
          position: "top-right", 
        });
      }
      else if(response.data.message === "please enter valid email address"){
        toast.error("⚠️ Please enter a valid email address", {
          position: "top-right",  
        });
      }
      else{
        toast.error("⚠️ Incorrect email or password. Please try again!", {
          position: "top-right", 
        });
      }
  }

  // useEffect(()=>{
  //   console.log(data)
  // },[data])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-[1px]">
      <form onSubmit={login} className={`w-72 bg-white shadow-xl rounded-sm p-4 ${currentState !=="Login" ?"h-80" : "h-72"}`}>
        <div className="flex justify-between mx-2">
          <p className="font-bold text-lg">{currentState === "Sign-up" ? "Create Account":"Login"}</p>
          <img
            className="h-4 mt-1 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="mx-2 mt-4">
            {currentState !== "Login" && <input onChange={onchangeHandler} type="text" placeholder="Your Name" value={data.name} name="name"  required className="outline-none border h-8 rounded-sm  w-full px-2  mb-3 text-sm" />}
          <input onChange={onchangeHandler} value={data.email} type="text" autoComplete="email" name="email" placeholder="Your Email" required className="outline-none border h-8  rounded-sm  w-full px-2  mb-3 text-sm" />
          <input onChange={onchangeHandler} value={data.password} autocomplete="current-password" type="password" name="password" placeholder="Password" required className="outline-none border h-8 rounded-sm  px-2 mb-3 w-full text-sm" />
          <div className="flex gap-1 mx-2 mb-2">
           <input className="h-6" type="checkbox" required />
           <p className="text-gray-700 text-xs mb-1">Before continuing, I am agree to the terms & conditions</p>
        </div>
          <button 
          type="sumbit" 
          className="w-full bg-orange-500 py-[6px] text-sm  rounded-sm text-white hover:cursor-pointer mb-2 ">
            {currentState === "Sign-up" ? "Create Account":"Login"}</button>
        </div>
        <p className="text-xs text-gray-700 mt-2 mx-2">Already have an account? <span onClick={()=>setCurrentState(prevState => prevState === "Sign-up" ? "Login" : "Sign-up")} className=" font-semibold text-orange-400 hover:text-orange-500 hover:cursor-pointer">{currentState === "Sign-up"? "Login here" : "Create Account"}</span></p>
      </form>
    </div>
  );
}

export default Login;
