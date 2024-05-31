import React from 'react'
import Header from './../Components/Header'

const ProductDetails = () => {
  return (
    <div className="">
      <section>
        <Header />
      </section>
      <div className="grid">
        <div className="mt-28 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
