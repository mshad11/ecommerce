import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getAllCarts } from '../api/cart';


function Cart() {
  const [carts,setCarts] = useState()

  const cartinit = async () =>{
    const result = await getAllCarts()
    setCarts(result.data)
    console.log(result.data)
  }
  console.log(carts)

useEffect(() => {
  cartinit()
},[])





  return (
    <div className='container'>
      <div className='display-5 text-center'>Add Your products Here</div>
      <Link to = '/home'> <button className='btn btn-danger'>Proceed To CheckOut</button></Link>
      
      
    </div>
  )
}

export default Cart;
