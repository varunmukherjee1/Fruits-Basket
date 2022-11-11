import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';

import CartContext from '../../store/cart-context';
import classes from "./FoodItem.module.css"

function FoodItem(props) {

  const [count,setCount] = useState(1);
  const ctx = useContext(CartContext)
  const navigate = useNavigate();

  const incCount = () => {
    setCount(count + 1);
  }

  const decCount = () => {
    if(count === 1){
      return;
    }

    setCount(count-1);
  }

  const addToCart = () => {
    const item = {
      ...props.obj,
      amount: count,
    }

    ctx.addItem(item);
  }

  const buyNow = () => {
    const item = {
      ...props.obj,
      amount: count,
    }

    ctx.addItem(item);

    navigate("/checkout");
  }

  return (
    <div className = {classes.card}>
      <div className = {classes.line}></div>
      
      <div className = {classes.name}>
        {props.obj.name}
      </div>

      <div className = {classes.line}></div>

      <div className = {classes.price}>
        @ Rs. {props.obj.price}
      </div>

      <div className = {classes.counter}>
        <p onClick = {decCount}>-</p>
        <p>{count}</p>
        <p onClick = {incCount}>+</p>
      </div>

      <div className = {classes.buttons}>
        <button onClick = {addToCart}>Add to Cart</button>
        <button onClick = {buyNow}>Buy Now</button>
      </div>
    </div>
  )
}

export default FoodItem