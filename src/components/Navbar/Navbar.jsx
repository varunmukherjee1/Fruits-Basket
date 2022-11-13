import React,{useContext , useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import classes from "./Navbar.module.css"
import CartContext from '../../store/cart-context'

function Navbar() {

  const ctx = useContext(CartContext);
  const [blob,setBlob] = useState(false)

  const cartCount = ctx.items.reduce((acc,curr) => (acc + curr.amount),0);

  useEffect(() => {
    setBlob(true);
    setTimeout(()=>{
      setBlob(false);
    },500);
  },[cartCount]);

  return (
    <div className = {`${classes.nav} ${classes.stick}`}>
      <Link className = {classes.link} to = "/">
        <h1>Fruit's Basket 🧺</h1>
      </Link>

      <div className = {classes.menu}>
        <Link className = {classes.link} to = "/products">
          Products
        </Link>
        <Link className = {`${(blob)? classes.blob: ""} ${classes.cart}`} to = "/checkout">
          {/* <i className ="fa-solid fa-cart-shopping"></i> */}
          <i className ="fa-solid fa-basket-shopping"></i>
          Basket 
          <span>{cartCount}</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar