import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.css"
import emptycart from '../Images/emptycart.jpg';
import del from '../Images/delete.png'
import { DeleteFromBag, TotalPriceOfBag } from '../BagRedux/Action';
import { Link } from 'react-router-dom';

function Cart() {

  const Dispatch = useDispatch();
const[index, Setindex] = useState(false);
const carts = useSelector(((store) => store.cart));
const[itemnumber ,SetItemNumber] = useState(1)


const [obj,Setobj] = useState([]);
console.log(carts)


var price =0;

carts.map((e)=>{
  price += e.price
})
 const[totalprice , Settotalprice] = useState( price - 500)
  return (
    <div  className='Cart-Container'>  
   {
    carts.length == 0 ? <img  src={emptycart} />:
   <div className='miniDivision'>
                  <div>
              {
                carts.map((e) =>(
                  <div className='Cart-div'>
                <div key={e.id}>
                <img src={e.image} className="cart-image" />
                </div>
              <div>
              <p className='cart-item-name'>{e.name}</p>
           <div className='del-div'>
           <p>Size :{e.size}</p>  
           <button className='delete-btn'   onClick={()=>{Setindex(obj.indexOf(e));

            Dispatch(DeleteFromBag(index))
          
          }}><img src={del} className="delete-img"/></button>
             
           </div>
              <p className='Price'>Price :{e.price} /Rs</p>
              </div>

                  </div>
                ))
              }
            </div>
              <div className='payment'>
              <h2>Order Details</h2>
               <p className='bagTotal'>Bagtotal <span style={{marginLeft:'10rem'}}>{price} /Rs</span></p>
               <p className='bagTotal'>Bagdiscount <span style={{marginLeft:'8rem'}}>500 /Rs</span></p>
               <p className='bagTotal'>Delivery <span style={{marginLeft:'11rem',color:"white"}}>Free</span></p>
               <p className='bagTotal'>Total Amount <span style={{marginLeft:'8rem'}}>{totalprice} /RS</span></p>
<Link to='/Checkout' >               <button className='paymentBtn'
                                 onClick={()=>{Dispatch(TotalPriceOfBag(totalprice))}}
>PROCEED TO PAY</button>
</Link>
               </div>

   </div>

   }


    </div>
  )
}
export default Cart


// <button className='delete-btn'   onClick={()=>{Setindex(obj.indexOf(e));

//   Dispatch(DeleteFromBag(index))

// }}><img src={del} className="delete-img"/></button>