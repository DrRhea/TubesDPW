import { Head } from '@inertiajs/react'
import React from 'react'
import Hero from '../Home/Hero'
import Highlight from '../Home/Highlight'
import Footer from '../Components/Footer'
import Testimonials from './../Home/Testimonials'
import Excellence from './../Home/Excellence'
import Process from './../Home/Process'
import Blog from './../Home/Blog'

const Home = () => {
  return (
    <div className="font-poppins text-slate-900 min-h-screen overflow-y-scroll">
      <section className="mb-16">
        <Hero />
      </section>
      <section className="min-h-fit w-screen px-8 max-md:px-4 flex flex-col gap-4">
        <Highlight />
        <Process />
        <Excellence />
        <Testimonials />
        <Blog />
      </section>
      <section className="mt-8">
        <Footer />
      </section>
    </div>
  )
}

export default Home
