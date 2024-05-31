import React from 'react'
import Header from '../Components/Header'
import ProductList from './../Product/ProductList'
import Breadcrumb from './../Components/Breadcrumb'
import Footer from './../Components/Footer'

const Product = () => {
  return (
    <div className="font-poppins text-slate-900">
      <Header />
      <section className="min-h-fit w-screen px-8 max-md:px-4 flex flex-col gap-4">
        {/* <Breadcrumb /> */}
        <ProductList />
      </section>
      <section className="mt-8">
        <Footer />
      </section>
    </div>
  )
}

export default Product
