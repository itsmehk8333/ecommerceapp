import React from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const totalprice = useSelector((store) => store.price)
    console.log(totalprice)
    return (
    <div>
    <div class="Containers"> 
<div class="Amount">
    <p class="total">TotalAmount</p> <p id="price">{totalprice} /Rs</p>
</div> 

<div>
    <p>Card Details</p>
    <input type="text" placeholder="First name"  id="first-name"/>
    <input type="text" placeholder="Last name" id="last-name" />  <br/>
    <br/>
   
      <input type="text" placeholder="card number" id="card-input"/><input type= "month" id="month"/>
      <br/>
      <input type="text"  placeholder="cvv"  id="cvv"/>
</div><br/>
<Link to='/End'><button id="payment" onclick="paymentdone()">Submit Payment</button></Link>  
  </div>
    
    
    
    </div>
  )
}

export default Checkout
// <input type="text" placeholder="foo" name="foo" id="month"><br/>