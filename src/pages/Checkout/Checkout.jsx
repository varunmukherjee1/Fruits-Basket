import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'

import CartContext from '../../store/cart-context'
import CartItem from "../../components/CartItem/CartItem"
import classes from "./Checkout.module.css"

function Checkout() {

  
  const ctx = useContext(CartContext);
  const [overlay,setOverlay] = useState(false);

  const placeOrder = () => {
    ctx.clearCart();

    setOverlay(true);
    setTimeout(() =>{
      setOverlay(false);
    },1500);

  }

  return (
    <div className = {classes.checkout}>
        {overlay && 
          <>
            <div className = {classes.overlay}></div>
            <div className = {classes.model}>
              Order Placed Successfully ✅
            </div>
          </>
        }
        {(ctx.items.length === 0) && <div className = {classes.notif}>
          <p>Your cart in Empty !</p>
          <p>Add some products from <Link to = "/">here</Link> 👈🏻</p>
          <div className = {classes.line}></div>
        </div>}
        {!(ctx.items.length === 0) && 
          <>
            <div className = {classes.preview}>
              <h2>Summary</h2>
              <div className = {classes.line}></div>

              <p>Total Items :  <strong>{ctx.items.reduce((acc,item) => (acc + item.amount),0)}</strong></p>
              <p>Sub Total (💵):  <strong>Rs. {ctx.totalAmount}</strong></p>

              <div className = {classes.line}></div>

              <div>
                <button onClick = {placeOrder}>Place Order</button>
              </div>
            </div>
            <div className = {classes.cart}>
              {
                ctx.items.map((item) => (<CartItem key = {item.id} obj = {item}/>))
              }
            </div>
          </>
        }
    </div>
  )
}

export default Checkout