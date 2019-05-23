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
            
            {discount > 0 && (
                <>
                    <p>Original: <span>{originalTotal}</span></p>
                    <p class="is-primary">Discount: -{totalDiscount}</p>
                </>
            )}
            <h3 className="title is-4 is-outlined">Total: {discountedTotal}</h3>
        </div>
    )
}

export default Total