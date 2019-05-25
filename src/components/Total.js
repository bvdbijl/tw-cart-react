import React, { useContext } from 'react'
import Context from '../context/context'

const Total = ({ discount }) => {
    const { cart } = useContext(Context)

    const { originalTotal, totalDiscount, discountedTotal } = Object.entries(cart).reduce((acc, [, curr]) => {
        let { originalTotal, totalDiscount, discountedTotal } = acc
        const currentTotal = curr.price * curr.amount
        const currentDiscount = currentTotal * discount
        originalTotal += currentTotal
        totalDiscount += currentDiscount
        discountedTotal += (currentTotal - currentDiscount)
        return { originalTotal, totalDiscount, discountedTotal }
    }, { originalTotal: 0, totalDiscount: 0, discountedTotal: 0 })

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