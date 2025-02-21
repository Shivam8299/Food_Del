import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Add from './pages/Add'
import Order from './pages/Order'
import List from './pages/List'

function App() {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar/>
      < hr />
      <div className='flex'>
        <Sidebar/>
        <div className="flex-grow p-4">
        <Routes>
          <Route path="/add" element={<Add/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App