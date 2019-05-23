import React, { useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import Discount from './Discount'
import {CartContext} from './App'

const Cart = () => {
    
    const {cart, dispatchCart} = useContext(CartContext)
    const [events, setEvents] = useState([])

    useEffect(() => {
        const event = {
            cart,
            timestamp: new Date().valueOf()
        }
        setEvents([...events, event])
        console.log(events)
    }, [cart])

    return (
        <>
            <h1>Cart</h1>
            {/* { items.map((item) => <CartItem key={item.id} item={item} />) } */}
            {
                Object.entries(cart).map(([id, item]) => (
                    <CartItem key={id} item={item} />
                ))
            }
            <button onClick={() => dispatchCart({type: "EMPTY_CART"})}>Remove All Items</button>
            <Discount />
            
            {/* <Checkout /> */}
        </>
    )
}

export default Cart