import React from 'react'

const Product = ({ equipment }) => {
  console.log(equipment)
  return (
    <div>
      {equipment.map((e) => (
        <div key={e.id}>
          <p>{e.name}</p>
          <p>{e.description}</p>
          <p>Rental Price per Day: {e.rental_price_per_day}</p>
          <p>Purchase Price: {e.purchase_price}</p>
          <p>Availability Status: {e.availability_status}</p>
          <p>Category ID: {e.category_id}</p>
          <p>Brand: {e.brand}</p>
        </div>
      ))}
    </div>
  )
}

export default Product
