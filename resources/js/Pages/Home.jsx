import '@inertiajs/react'
import React from 'react'

const Home = ({products}) => {
  return (
    <>
      Test
      { products.map((product, index) => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>{product.category}</li>
          <li>{product.description}</li>
          <li>{product.price_per_day}</li>
        </ul>
      )) }
    </>
  )
}

export default Home