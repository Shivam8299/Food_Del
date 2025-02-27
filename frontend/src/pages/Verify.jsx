import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

function Verify() {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {backendUrl} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async()=>{
        const response = await axios.post(`${backendUrl}/api/order/verify`,{success,orderId})
        console.log(response.data)
        if(response.data.success){
            navigate("/myorders")
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <div className=" w-full h-screen flex justify-center items-center bg-white">
  <div className="h-12 w-12 border-4 border-zinc-400 border-t-red-600 rounded-full animate-spin"></div>
</div>
  )
}

export default Verify
