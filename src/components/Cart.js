import React from 'react'
import CartItem from './CartItem'

const CartContext = React.createContext({})

const Cart = ({ stock }) => {
    const initialState = {
        items: {...stock},
        discount: null,
        events: []
    }

    return (
        <CartContext.Provider value={initialState}>
            <h1>Cart</h1>
            {
                Object.entries(initialState.items).map(([key, value]) => <CartItem key={key} item={value}/>)
            }
            {/* <Discount /> */}
            {/* <Total /> */}
        </CartContext.Provider>
    )
}

export default Cart