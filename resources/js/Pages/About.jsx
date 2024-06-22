import React from 'react'
import Header from '../Components/Header'
import Footer from './../Components/Footer'

const About = () => {
  return (
    <div className="font-poppins text-slate-900">
      <Header />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Established with a vision to revolutionize the industry, we
                  are dedicated to crafting exceptional experiences. Our journey
                  began with a simple idea: to redefine excellence. Today, we
                  stand as a testament to innovation and quality.
                </p>

                <p>
                  Committed to delivering excellence in every endeavor, our team
                  is driven by passion and fueled by creativity. We believe in
                  pushing boundaries and surpassing expectations, setting new
                  standards along the way.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
