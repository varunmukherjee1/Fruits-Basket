import React,{useContext,useState} from 'react'

import CartContext from '../../store/cart-context'
import classes from "./CartItem.module.css"

function CartItem(props) {

    const ctx = useContext(CartContext);
    const [count,setCount] = useState(props.obj.amount)

    const incCount = () => {
        setCount(count+1);
        ctx.addItem({
            ...props.obj,
            amount: 1
        })
    }

    const decCount = () => {
        setCount(count-1);
        ctx.removeItem(props.obj.id,false)
    }

    const removeItem = () => {
        ctx.removeItem(props.obj.id,true)
    }

    return (
    <div className = {classes.card}>
        {/* <div className = {classes.line}></div> */}
        
        <div className = {classes.name}>
        {props.obj.name}
        </div>

        {/* <div className = {classes.line}></div> */}

        <div className = {classes.price}>
        @ Rs. {props.obj.price}
        </div>

        <div className = {classes.counter}>
        <p onClick = {decCount}>-</p>
        <p>{props.obj.amount}</p>
        <p onClick = {incCount}>+</p>
        </div>

        <div className = {classes.buttons}>
            <button onClick = {removeItem}>X</button>
        </div>
    </div>
    )
}

export default CartItem