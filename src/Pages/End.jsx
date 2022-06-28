import React from 'react'
import sucess from '../Images/check.png'
import './End.css'

function End() {
  return (
    <div>
    <div>
    <input type="number" width="1rem" />
    <img src={sucess}  className="End-image"/>
    <p className='Payment-Sucessful'>Payment Sucessfull</p>
    </div>
    
    
    </div>
  )
}

export default End