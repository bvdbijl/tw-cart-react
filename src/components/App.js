import React, { useReducer } from 'react';

import Cart from './Cart'
import Products from './Products'
import { AppWrapper, Section, Columns } from './Bulma'

import Context from '../context/context'

import { cartReducer, initialCart } from '../reducers/cart'
import { productsReducer, initialProducts } from '../reducers/products'


function App() {
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart)
  const [products, dispatchProducts] = useReducer(productsReducer, initialProducts)

  const context = {
    cart,
    dispatchCart,
    products,
    dispatchProducts
  }

  return (
    <AppWrapper>
      <Section>
        <Context.Provider value={context}>
          <Columns>
            <Cart />
            <Products />
          </Columns>
        </Context.Provider>
      </Section>
    </AppWrapper>
  );
}

export default App;