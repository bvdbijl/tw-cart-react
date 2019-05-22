import React from 'react'

const CartItem = ({ item }) => {
    return (
        <div className="cartItem">
            <h1>CartItem</h1>
            <p>{item.display_name}</p>
            <p>{item.price}</p>
            <button>-</button>
            <p>Quantity</p>
            <button>+</button>
        </div>
    )
}

export default CartItem