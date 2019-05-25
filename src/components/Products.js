import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import Context from '../context/context'

const Products = () => {
    const { products } = useContext(Context)
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
                        <tr key={id + "_product"} >
                            <ProductItem item={item} />
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