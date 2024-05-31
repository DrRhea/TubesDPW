import React from 'react'
import Products from './Products'

const Highlight = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Product List
        </h2>

        <p className="mt-4 text-slate-500 sm:text-xl">
          Discover a wide range of products and packages tailored to your
          specific needs.
        </p>
      </div>
      <Products />
    </div>
  )
}

export default Highlight
