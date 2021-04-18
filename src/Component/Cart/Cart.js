import React, {useContext} from 'react'
 import { CartContext } from '../Sherd/cartcontext'
const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext)
  const totalprice = cartItems.reduce((prevValue, currValue) => {
      return prevValue + currValue.price
  },0)
    return (
        <div>
           <p>Items is cart: {cartItems.length} </p> 
           <p>Total price: {totalprice} </p>
           
        </div>
    )
}

export default Cart
