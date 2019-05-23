import React, { useContext } from 'react'
import { CartContext } from './App'


const ProductItem = ({ item: { id, displayName, price } }) => {
    const { dispatchCart } = useContext(CartContext)
    const add_item = () => {
        dispatchCart({ type: "ADD_ITEM", payload: { id, displayName, price } })
    }
    return (
        <>
            <td>
                <h3 className="title is-5">{displayName}</h3>
            </td>
            <td>
                <p class="content">{price}</p>
            </td>
            <td style={{ textAlign: "right" }}>
                <button class="button is-primary" onClick={add_item}>Add to Cart</button>
            </td>
        </>
    )
}

export default ProductItem