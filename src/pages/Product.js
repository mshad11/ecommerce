import React from 'react'
import { Link } from 'react-router-dom'
function Product() {
  return (
    <div className='container'>
      <div className='display-5 text-center'>Welcome To Cart</div>
      <Link to= "/cart"> <button className='btn btn-danger'>Add To Cart</button></Link>
      
    </div>
  )
}

export default Product
