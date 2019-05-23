import React, { useContext } from 'react'
import { CartContext } from './App'

const CartItem = ({ item: { id, displayName, price, amount } }) => {
    const { dispatchCart } = useContext(CartContext)

    return (
        <>
            <td>
            <h3>{displayName}</h3>

            </td>
            <td>
            <p>{price}</p>

            </td>
            <td>
            <button className="button" onClick={() => amount > 1 && dispatchCart({ type: "DECREMENT_ITEM", payload: { id } })}>-</button>
            <input
            className="input is-inline"
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
            <button className="button" onClick={() => amount < 999 && dispatchCart({ type: "INCREMENT_ITEM", payload: { id } })}>+</button>

            </td>
            <td>

            <button className="button is-danger" onClick={() => dispatchCart({ type: "REMOVE_ITEM", payload: { id } })}>Remove</button>
            </td>
        </>
    )
}

export default CartItem