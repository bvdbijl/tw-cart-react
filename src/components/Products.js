import React from 'react'
import ProductItem from './ProductItem'

const Products = ({ stock }) => {
    return (
        <div>
            <h1>Products</h1>
            {
                Object.entries(stock).map(([key, value]) => <ProductItem key={key} item={value}/>)
            }
        </div>
    )
}

export default Products