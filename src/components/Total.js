import React, { useContext } from 'react'
import { CartContext } from './App'

const Total = ({ discount }) => {
    const { cart } = useContext(CartContext)

    const calculateTotal = () => {
        return Object.entries(cart).reduce((acc, [, curr]) => {
            let currentTotal = curr.price * curr.amount
            let currentDiscount = currentTotal * discount
            acc.originalTotal += currentTotal
            acc.totalDiscount += currentDiscount
            acc.discountedTotal += (currentTotal - currentDiscount)
            return acc
        }, {originalTotal: 0, totalDiscount: 0, discountedTotal: 0})
    }
    const { originalTotal, totalDiscount, discountedTotal } = calculateTotal()

    return (
        <div>
            <h3 className="total">Total</h3>
            {discount > 0 && (
                <>
                    <p>Original total: <span style={{textDecoration: "line-through"}}>{originalTotal}</span></p>
                    <p>Discount: {totalDiscount}</p>
                </>
            )}
            <p>Your total: {discountedTotal}</p>
        </div>
    )
}

export default Total