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
        <div>
            <h3>Discount Code</h3>
            <input type="text" value={discountCode} onChange={handleChange}/>
            <em style={{paddingLeft: "10px"}}>Use code 'superdiscount' for a 10% discount.</em>
            <p>{discount > 0 ? `${discount * 100} % Discount!`  : 'No Discount'}</p>
            <Total discount={discount}/>
        </div>
    )
}

export default Discount