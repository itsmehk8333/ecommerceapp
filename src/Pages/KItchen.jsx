import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './ShirtPage.css'
import { home } from '../Data'
import rupee from '../Images/rupee.png'
function Kitchen() {


  return (
    <div>

    <h1 className='shirt-logo'>HOME AND KITCHEN</h1>
    <div className='Shirt-Container'>
    {
        home.map((e) =>(
           <div className='Mini-Container' >
          <img src={e.img} className="Shirt-img"/>
           <p className='Shirt-title'>{e.name}</p>
      <div style={{display:"flex" , alignItems:"center"}}>
     <img src={rupee}  style={{marginLeft:'4rem' ,width:"1.5rem"}}/>  <p className="prices">   {e.price} </p>
      </div>   
      <Link to='/SinglePage'> <button className='view-btn'  onClick={()=>{
            localStorage.setItem("img" , e.img);
            localStorage.setItem("price",e.price);
            localStorage.setItem("name",e.name)
          
          }}  >View Product</button></Link>
           </div>
        ))
    }
    </div>
    
    
    </div>
  )
}

export default Kitchen