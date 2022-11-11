import React, {useReducer} from 'react'

import CartContext from './cart-context'

const initState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {

    if(action.type === "ADD"){

        const newTotalAmount = state.totalAmount + action.item.price*action.item.amount;

        const prevIdx = state.items.findIndex((item) => (item.id === action.item.id));
        const prevItem = state.items[prevIdx];

        let updatedItems;

        if(prevItem){
            const newItem = {
                ...prevItem,
                amount: prevItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[prevIdx] = newItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }

    if(action.type === "REMOVE"){

        const prevIdx = state.items.findIndex((item) => (item.id === action.id));
        const prevItem = state.items[prevIdx];

        let updatedAmount;

        if(action.removeAll === true){
            updatedAmount = state.totalAmount - prevItem.amount*prevItem.price;
        }
        else{
            updatedAmount = state.totalAmount - prevItem.price;
        }

        let updatedItems;
        
        if(action.removeAll === true || prevItem.amount === 1){
            updatedItems = state.items.filter((item) => (item.id !== prevItem.id))
        }
        else{

            let newItem = {
                ...prevItem,
                amount: prevItem.amount - 1,
            }

            updatedItems = [...state.items];
            updatedItems[prevIdx] = newItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    return initState;
}

function CartProvider(props) {

    const [cartState,dispatch] = useReducer(cartReducer,initState);

    const addItemHandler = (item) => {
        dispatch({type: "ADD", item: item});
    }

    const removeItemHandler = (id,removeAll) => {
        dispatch({type: "REMOVE", id: id , removeAll: removeAll})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    
    return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider