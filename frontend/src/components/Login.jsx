import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
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

      if(response.status === 200){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
        setShowLogin(false)
        
      }
      else{
        alert(response.data.message)
      }


  }

  useEffect(()=>{
    // console.log(data)
  },[data])

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
          <input onChange={onchangeHandler} value={data.email} type="text" name="email" placeholder="Your Email" required className="outline-none border h-8  rounded-sm  w-full px-2  mb-3 text-sm" />
          <input onChange={onchangeHandler} value={data.password} type="password" name="password" placeholder="Password" required className="outline-none border h-8 rounded-sm  px-2 mb-3 w-full text-sm" />
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
