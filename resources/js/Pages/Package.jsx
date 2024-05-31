import React from 'react'
import Header from '../Components/Header'
import PackageList from './../Package/PackageList'

const Package = () => {
  return (
    <div className="font-poppins text-slate-900">
      <Header />
      <section className="min-h-fit w-screen px-8 max-md:px-4 flex flex-col gap-4">
        <PackageList />
      </section>
    </div>
  )
}

export default Package
