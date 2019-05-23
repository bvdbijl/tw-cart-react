import React, { useState } from 'react'
import Total from './Total'

const validDiscountCodes = {superdiscount: 0.10}

const Discount = () => {
    const [discountCode, setDiscountCode] = useState('')
    const [discount, setDiscount] = useState(0)

    const handleChange = (e) => {
        const text = e.target.value
        setDiscountCode(text)
        if (validDiscountCodes[text]) {
            setDiscount(validDiscountCodes[text])
        } else {
            setDiscount(0)
        }
    }
    return (
        <>
        <div className="level">
            <h3>Discount Code</h3>
            <input placeholder="superdiscount" type="text" value={discountCode} onChange={handleChange}/>
            <p>Current discount: {discount > 0 ? `${discount * 100}% Discount!`  : 'No Discount'}</p>
        </div>
        <Total discount={discount}/>
        </>
    )
}

export default Discount