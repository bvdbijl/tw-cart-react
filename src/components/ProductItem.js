import React, { useContext } from 'react'
import { CartContext } from './App'


const ProductItem = ({ item: { id, displayName, price } }) => {
    const {dispatchCart} = useContext(CartContext)
    const add_item = () => {
        dispatchCart({ type: "ADD_ITEM", payload: {id, displayName, price }})
    }
    return (
        <div className="productItem">
            <h3>{displayName}</h3>
            <p>{price}</p>
            <button onClick={add_item}>Add to Cart</button>
        </div>
    )
}

export default ProductItem