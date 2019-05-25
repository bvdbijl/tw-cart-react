import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import Discount from './Discount'
import Context from '../context/context'

const CartHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`



const Cart = () => {
    
    const {cart, dispatchCart} = useContext(Context)
    const [events, setEvents] = useState([])

    useEffect(() => {
        const event = {
            cart,
            timestamp: new Date().valueOf()
        }
        setEvents([...events, event])
        console.log(`Events:`, events)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const removeAllCartItems = () => dispatchCart({type: "EMPTY_CART"})

    return (
        <div className="column">
        <div className="box">
            <CartHeader>
                <h1 className="title">Cart</h1>
                <button className="button" onClick={removeAllCartItems}>Remove All Items</button>
            </CartHeader>
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
                        <tr key={id + "_cart"}>
                            <CartItem item={item} />
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