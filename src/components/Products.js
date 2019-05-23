import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { SKUContext } from './App'

const Products = () => {
    const { products } = useContext(SKUContext)
    return (
        <div>
            <h1>Products</h1>
            {/* {items.map((item) => <ProductItem key={item.id} item={item}/>)} */}
            {
                Object.entries(products).map(([id, item]) => (
                    <ProductItem key={id} item={item} />
                ))
            }
        </div>
    )
}

export default Products