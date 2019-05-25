import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Columns, Box, Heading, Table } from 'react-bulma-components'
import CartItem from './CartItem'
import Discount from './Discount'
import Context from '../context/context'


const SpacedHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Column = Columns.Column

const Cart = () => {

    const { cart, dispatchCart } = useContext(Context)
    const [events, setEvents] = useState([])

    // Log mutations of cart to events local state
    useEffect(() => {
        const event = {
            cart,
            timestamp: new Date().valueOf()
        }
        setEvents([...events, event])
        console.log(`Events:`, events)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const removeAllCartItems = () => dispatchCart({ type: "EMPTY_CART" })

    return (
        <Column>
            <Box>
                <SpacedHeader>
                    <Heading>Cart</Heading>
                    <Button onClick={removeAllCartItems}>Remove all Items</Button>
                </SpacedHeader>
                <Table striped={false} className="is-hoverable">
                    <thead><tr> <th>Name</th> <th>Price</th> <th>Quantity</th> <th></th> </tr></thead>
                    <tbody>
                        {Object.entries(cart).map(([id, item]) => (
                                <tr key={id + "_cart"} >
                                    <CartItem item={item} />
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <Discount />

                {/* <Checkout /> */}
            </Box>
        </Column>
    )
}

export default Cart