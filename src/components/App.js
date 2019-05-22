import React from 'react';
import './App.css';
import Cart from './Cart'
import Products from './Products'

const STOCK_KEEPING_UNITS = {
  Oven: {
      display_name: "Oven",
      price: 150.00,
  },
  Microwave: {
      display_name: "Microwave",
      price: 100.00
  },
  Grill: {
      display_name: "Grill",
      price: 75.00
  }
}

function App() {
  return (
    <div className="App">
      <Cart stock={STOCK_KEEPING_UNITS} />
      <Products stock={STOCK_KEEPING_UNITS} />
    </div>
  );
}

export default App;