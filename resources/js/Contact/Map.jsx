import React from 'react'

const Map = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-fit lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <iframe
                width="100%"
                height={600}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ubertos+(r%20h%20e%20n%20t)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              >
                &lt;a href="https://www.gps.ie/"&gt;gps devices&lt;/a&gt;
              </iframe>
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Our Commitment to Excellence
              </h2>

              <p className="mt-4 text-gray-600">
                At Uberto's, we pride ourselves on delivering unparalleled
                quality and service. Our dedication to excellence ensures that
                we meet and exceed our customers' expectations in every aspect.
                With a rich history of innovation and a forward-thinking
                approach, we continue to set the benchmark in our industry.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
