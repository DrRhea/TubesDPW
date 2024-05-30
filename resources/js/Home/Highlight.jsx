import React from 'react'
import Products from './Products'

const Highlight = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Trusted by eCommerce Businesses
        </h2>

        <p className="mt-4 text-slate-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>
      <Products />
    </div>
  )
}

export default Highlight
