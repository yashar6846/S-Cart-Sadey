
import React from 'react'
import Cart from './Component/Cart/Cart';
import ProductList from './Component/ProductList/ProductList';
import { CartProvider } from './Component/Sherd/cartcontext';

const App = () => {
  return (
    <CartProvider>
    <div>
      <p>Shopping car add</p>
      <ProductList />
      <Cart />
    </div>
    </CartProvider>
  )
}

export default App

