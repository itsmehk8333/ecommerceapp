import React from 'react';
import ajio from '../Images/Ajio.png'
import men from '../Images/men.jpg'
import women from '../Images/women.png'
import kids from '../Images/kids.png'
import home from '../Images/home.jpg'
import jwellery from '../Images/jwewllwery.jpg'
import makeup from '../Images/makup.png'
import "./Homepage.css"
import { Link } from 'react-router-dom';
import footer from '../Images/Footer.png'

function Homepage() {
  return (
    <div>
  <div className='Annoncement'>
  </div>
<img  src={ajio} className="Ajio-img"/>
  <div className='div-1'>
<Link to='/Shirts' style={{textDecoration:"none"}}><div className='divs  Shirt-div'>

<img src='https://rukminim1.flixcart.com/image/800/960/ksez24w0/shirt/h/s/s/xl-stiprd-251-leveluup-original-imag5zn8vqvanp4g.jpeg?q=50' className='Shirt'  />
<p style={{margin:'1rem 0 0 9rem', fontSize:"1.4rem"}}> SHIRTS</p>
</div></Link>
<Link to='/Pants'  style={{textDecoration:"none"}}>

<div className='divs Pants ' >
<img src='https://assets.vogue.com/photos/61fda1c7e8cf412034dbed55/master/w_320%2Cc_limit/slide_49.jpg'   className='pant'/>
<p style={{margin:'1rem 0 0 10rem', fontSize:"1.4rem"}}>PANTS</p>
</div></Link>
<Link to='/Shoes'  style={{textDecoration:"none"}}> 
<div className='divs Shoes '>
<img src="https://assets.ajio.com/medias/sys_master/root/20220530/r1Ca/6294971baeb26921aff2b8ad/red_tape_blue_low-top_lace-up_walking_shoes.jpg" className='shoe' />
<p style={{margin:'1rem 0 0 8rem', fontSize:"1.4rem"}}>SHOES</p>
</div>
</Link>
  </div>
    <div className='div-2'>
  <Link to='/Men' style={{textDecoration:"none"}}>
  <div className=' divs men-div'>
  <img src={men} className='men'/>
  <p className='Titles'>MEN</p>
  </div>
  </Link>
  <Link to='/Women' style={{textDecoration:"none"}}>
  <div className='divs women-div'> 
  <img src={women} className='women' />
  <p className='Titles' >WOMEN</p>
  </div>
  </Link>
   
   <div className='divs kids-div'>
   <img src={kids} className="kids" />
   <p className='Titles'>KIDS</p>
   </div>
    </div>
    <div className='div-3'>
    <div className=' divs home-div'>
    <img src={home} className="homeses" />
    <p className='Titles'>HOME </p>
    </div>
    <div className='divs jewellery-div'>
    <img src={jwellery} className="jewellery"/>
    <p className='Titles'>JEWELLERY</p>
    </div>
    <div className='divs makeup-div'>
    <img src={makeup} className="makeup" />
    <p className='Titles'>MAKEUP</p>
    </div>
 
  


    </div>
      <img src={footer}  className="Footer" />
    </div>
  )
}

export default Homepage