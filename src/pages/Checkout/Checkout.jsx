import React,{useContext} from 'react'

import CartContext from '../../store/cart-context'
import CartItem from "../../components/CartItem/CartItem"
import classes from "./Checkout.module.css"

function Checkout() {

  const ctx = useContext(CartContext);

  return (
    <div className = {classes.checkout}>
      <div className = {classes.cart}>
        {
          ctx.items.map((item) => (<CartItem obj = {item}/>))
        }
      </div>
      <div className = {classes.preview}>
        <h2>Summary</h2>
        <div className = {classes.line}></div>

        <p><strong>Total Items :</strong>  {ctx.items.reduce((acc,item) => (acc + item.amount),0)}</p>
        <p><strong>Sub Total :</strong>  Rs. {ctx.totalAmount}</p>

        <div className = {classes.line}></div>

        <div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout