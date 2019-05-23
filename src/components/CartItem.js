import React, { useContext } from 'react'
import { CartContext } from './App'

const CartItem = ({ item: { id, displayName, price, amount } }) => {
    const { dispatchCart } = useContext(CartContext)

    return (
        <div className="cartItem">
            <h3>{displayName}</h3>
            <p>{price}</p>
            <button onClick={() => amount > 1 && dispatchCart({ type: "DECREMENT_ITEM", payload: { id } })}>-</button>
            <input
                type="number"
                onChange={(e) => {
                    const amount = Number(e.target.value)
                    if (amount >= 1 && amount <= 999) {
                        dispatchCart({
                            type: "SET_ITEM_AMOUNT",
                            payload: { id, amount: amount }
                        })
                    } 
                }}
                value={amount} />
            <button onClick={() => amount < 999 && dispatchCart({ type: "INCREMENT_ITEM", payload: { id } })}>+</button>
            <button onClick={() => dispatchCart({ type: "REMOVE_ITEM", payload: { id } })}>Remove</button>
        </div>
    )
}

export default CartItem