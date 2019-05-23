import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { SKUContext } from './App'

const Products = () => {
    const { products } = useContext(SKUContext)
    return (
        <div className="column">
            <div className="box">
            <h1 className="title">Products</h1>
            <table className="table is-fullwidth is-hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.entries(products).map(([id, item]) => (
                        <tr>
                            <ProductItem key={id} item={item} />
                        </tr>
                    ))
                }
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default Products