import React from 'react'

import './products.css'
import Card from '../components/Card'

const Products = ({result}) => {
  return (
    <>
    <section className="cards-container">
       {result}
    </section>
    </>
  )
}

export default Products