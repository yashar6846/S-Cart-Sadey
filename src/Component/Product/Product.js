import React, { useContext } from 'react'
import { CartContext } from '../Sherd/cartcontext'

const Product = (props) => {
    const [cartItems, setCartItems] = useContext(CartContext)
    const addToCart = () => {
        const product = { title: props.title, price: props.price }
          setCartItems((currState) => {
              return [...currState, product]
          })
    }
    return (
        <div>
          <p>{props.title}</p> 
          <p>{props.price}</p> 
          <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
