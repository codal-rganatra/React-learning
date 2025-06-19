import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
        { id: 3, name: 'Product C', price: 300 }
    ];
    return (
        <div>
            {
                products.map(({ id, name, price }) => (
                    <div key={id}>
                        <h2>Name: {name}</h2>
                        <p>ID: {id}</p>
                        <p>Price: ${price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList