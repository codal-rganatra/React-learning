import React from 'react'

const ProductInfo = () => {
    const product = {
        name: 'My test Product',
        price: 12000,
        availability: 'In Stock'
    };
  return (
    <div>
        <p>Name: {product.name}</p>
        hh
        <p>Price: ${product.price}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo