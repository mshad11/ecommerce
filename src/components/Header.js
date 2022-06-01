import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='row bg-light text-center px-5 py-2'>
        <div className='col '>Hi User</div>
        <div className='col'><Link to = '/cart'><h5>Cart</h5></Link></div> 
        <div className='col'>
            <button className='btn btn-danger'>  <Link to = '/'> 
            <h5>LogOut</h5>
            </Link></button>
        </div>
      
       
    </div>
  )
}

export default Header
