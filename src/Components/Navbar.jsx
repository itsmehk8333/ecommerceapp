import React from 'react'
import "./Navbar.css"
import cart from "../Images/shopping-cart.png"
import { Link } from 'react-router-dom'
import logo from '../Images/Ajiologo.png'
function Navbar() {
  return (
    <div>
    <div className='Container'>
    <Link to='/' style={{textDecoration:"none"}}><img src={logo}  className="Logo" /></Link>
 <Link to='/Shirts' style={{textDecoration:"none"}}> <h3 className='shirt'>SHIRTS</h3></Link>
 <Link to='/Pants' style={{textDecoration:"none"}}> <h3 className='pants'>PANTS</h3></Link>
 <Link to='/Shoes' style={{textDecoration:"none"}}> <h3 className='shoes'>SHOES</h3></Link>
<Link to='/Kitchen' style={{textDecoration:"none"}}>  <h3 className='home'>HOME AND KICHEN</h3></Link>
<Link to='/Cart' style={{textDecoration:"none"}}><img src={cart} className="cart-img"/></Link>
<h3 className='signin'>Signin </h3>
  </div>
    </div>
  )
}

export default Navbar