import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/Add'
import Order from './pages/Order'
import List from './pages/List'

function App() {
  return (
    <div>
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