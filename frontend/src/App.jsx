import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AppDownload from "./components/AppDownload";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <div className="mt-4 bg-gray-50 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/myorders" element={<MyOrders/>} />
      </Routes>
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
