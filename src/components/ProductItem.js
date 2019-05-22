import React from 'react'

const ProductItem = ({ item }) => {

    const add_item = () => {

    }
    return (
        <div className="productItem">
            <h1>ProductItem</h1>
            <p>{item.display_name}</p>
            <p>{item.price}</p>
            <button onClick={add_item}>+</button>
        </div>
    )
}

export default ProductItem