import React, { useState, useReducer, createContext } from 'react';
import './App.css';
import Cart from './Cart'
import Products from './Products'

export const CartContext = createContext()
export const SKUContext = createContext()

const initialCart = {}

const initialProducts = {
  OvenId: {
    id: "OvenId",
    displayName: "Oven",
    price: 150.00,
  },
  MicrowaveId: {
    id: "MicrowaveId",
    displayName: "Microwave",
    price: 100.00
  },
  GrillId: {
    id: "GrillId",
    displayName: "Grill",
    price: 75.00
  }
}

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      if (payload.id in state) {
        if (state[payload.id].amount < 999) {
          return {
            ...state,
            [payload.id]: {
              ...payload,
              amount: state[payload.id].amount + 1
            }
          }
        }
      }
      return {
        ...state,
        [payload.id]: {
          ...payload,
          amount: 1
        }
      }

    case "INCREMENT_ITEM":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          amount: state[payload.id].amount + 1
        }
      }

    case "DECREMENT_ITEM":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          amount: state[payload.id].amount - 1
        }
      }
      
    case "REMOVE_ITEM":
      const {[payload.id]: _, ...newState} = state
      return newState
      // return Object.assign({}, Object.entries(state).filter((id) => id !== payload.id))

    case "SET_ITEM_AMOUNT":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          amount: payload.amount
        }
      }

    case "EMPTY_CART":
      return {}

    default:
      return state
  }
}


function App() {
  const [products] = useState(initialProducts)
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart)

  return (
    <div className="App has-background-dark">
      <SKUContext.Provider value={{ products }}>
        <CartContext.Provider value={{ cart, dispatchCart }}>
          <div className="section">
            <div className="columns is-3">
              <Cart />
              <Products />
            </div>
          </div>
        </CartContext.Provider >
      </SKUContext.Provider >
    </div>
  );
}

export default App;