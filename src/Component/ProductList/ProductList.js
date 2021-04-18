import React from 'react'
import Product from './../Product/Product';

const ProductList = () => {

    const products = [
        {id: 1, title: "Book 1", price: 20},
        {id: 2, title: "Book 2", price: 23},
        {id: 3, title: "Book 3", price: 26},
    ]
    return (
        <div>
            {
        products.map((item) => {
            return <Product 
            key={item.id}
            title={item.title}
            price={item.price}
            />
        })
    }
        </div>
    )
}

export default ProductList
