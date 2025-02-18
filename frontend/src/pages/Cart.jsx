import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

function Cart() {
  const {cartItems, food_list, removeFromCart} = useContext(StoreContext)
  // console.log(cartItems, food_list, removeFromCart)
  return (
    <div>
      
    </div>
  )
}

export default Cart