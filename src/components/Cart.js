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
        <div className="column">
        <div className="box">
            <div className="cart-header">
                <h1 className="title">Cart</h1>
                <button className="button" onClick={() => dispatchCart({type: "EMPTY_CART"})}>Remove All Items</button>
            </div>
            <table className="table is-fullwidth is-hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.entries(cart).map(([id, item]) => (
                        <tr>
                            <CartItem key={id} item={item} />
                        </tr>
                    ))
                }
            </tbody>
            </table>
            <Discount />
            
            {/* <Checkout /> */}
        </div>
        </div>
    )
}

export default Cart