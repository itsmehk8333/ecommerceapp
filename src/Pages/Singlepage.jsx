import React, { useState } from 'react'
import './Singlepage.css'
import Rupee from '../Images/rupee.png'
import { useDispatch } from 'react-redux';
import { AddToBag } from '../BagRedux/Action';
import {Link} from "react-router-dom"
import right from '../Images/check-mark.png'

function Singlepage() {

  const [buttonvalue , SetButtonValue] = useState(false)
   const image = localStorage.getItem("img");
   const name = localStorage.getItem("name");
   const price =parseInt( localStorage.getItem("price"));


   const Dispatch = useDispatch();
   const [select , SetSelect] = useState("S");
   
  return (
    <div className='Single-Container'>
     <div className='image-div'>
     <img src={image} className="IMAGE" />
     
     
     </div>
    <div className='Details-div'>
    <p1 className="shirt-name">{name}</p1>
 <div style={{display:'flex', alignItems:"center"}}>
 <img src={Rupee}  style={{margin:"0rem 0 0 10rem"}}/>
 <p className='shirt-price'>{price}</p>
  </div>
  <div>
  <p   style={{fontFamily:"monospace", fontSize:"1.5rem", color:"rgb(217, 181, 117)", marginLeft:"8rem", marginTop:"0rem"}}> Cupons </p>
  <p  className='cupon '>Appply the code hk225 to get up to of 100rs </p>
  
  
  </div>
  <p className='Size-P'>Select the size</p>
  <select className='Size-Select' onChange={(e) =>{SetSelect(e.target.value)}}>
  <option value='S'>S</option>
  <option value='M'>M</option>
  <option value='L'>L</option>
  <option value='XL'>XL</option>
  <option value='XXL'>XXL</option>
  </select><br/>

{
buttonvalue == false ? <button className='AddToBag' onClick={()=>{

  Dispatch(AddToBag({
  name:name,
  price:price,
  image:image,
  size:select
 
   })); SetButtonValue(true)
 }}  >ADD TO BAG</button> :

 <button  className='AddedToCart' style={{display:"flex", alignItems:"center"}}> <img src={right} style={{marginLeft:"1.5rem", marginRight:"0.5rem"}} />  Added to cart </button>

}


    <br/>
   

    
    </div>

     </div>
  )
}

export default Singlepage

//  <button className='AddToWishlist'>ADD TO WISHLIST</button>
