import React, { useReducer } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Cart from './Cart'
import Products from './Products'
import { AppWrapper } from './Bulma'
import { Section, Columns } from 'react-bulma-components'

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
            <Cart /> {/* Cart component with products */}
            <Products /> {/* Products component with products */}
          </Columns>
        </Context.Provider>
      </Section>
    </AppWrapper>
  );
}

export default App;