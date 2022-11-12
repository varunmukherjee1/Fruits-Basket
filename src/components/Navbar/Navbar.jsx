import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';

import classes from "./Navbar.module.css"
import CartContext from '../../store/cart-context'

function Navbar() {

  const ctx = useContext(CartContext);

  // const changeNav = () => {
  //   console.log(window.scrollY);
  // }

  // window.addEventListener("scroll",changeNav);

  return (
    <div className = {`${classes.nav} ${classes.stick}`}>
      <Link className = {classes.link} to = "/">
        <h1>Fruit's Basket <i className="fa-solid fa-apple-whole"></i></h1>
      </Link>

      <Link className = {classes.cart} to = "/checkout">
        <i className ="fa-solid fa-cart-shopping"></i>
        <span>{ctx.items.reduce((acc,curr) => (acc + curr.amount),0)}</span>
      </Link>
    </div>
  )
}

export default Navbar