import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
   <div className='md:mx-32 mx-1 mt-4'>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<PlaceOrder/>} />
     </Routes>
   
   </div>
  )
}

export default App
