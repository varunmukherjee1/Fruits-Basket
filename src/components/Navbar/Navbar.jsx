import React,{useContext} from 'react'
import { useNavigate,Link } from 'react-router-dom';

import classes from "./Navbar.module.css"
import CartContext from '../../store/cart-context'

function Navbar() {

  const ctx = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className = {classes.nav}>
      <Link className = {classes.link} to = "/">
        <h1>Fruit's Basket</h1>
      </Link>

      <Link className = {classes.cart} to = "/checkout">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>{ctx.items.reduce((acc,curr) => (acc + curr.amount),0)}</span>
      </Link>
    </div>
  )
}

export default Navbar