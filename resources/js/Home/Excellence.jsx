import React from 'react'

const Excellence = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-fit px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-slate-600 sm:text-xl">
            Experience exceptional service that makes your rental journey
            seamless and enjoyable.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center px-4 py-8 text-center gap-4">
              <dt className="order-last text-lg font-medium text-slate-600">
                We prioritize your needs and satisfaction, ensuring a positive
                rental experience from start to finish.
              </dt>

              <i className="uil uil-smile-beam text-3xl"></i>
              <dd className="text-4xl font-extrabold text-slate-950 md:text-3xl">
                Customer-Centric Approach
              </dd>
            </div>

            <div className="flex flex-col items-center px-4 py-8 text-center gap-4">
              <dt className="order-last text-lg font-medium text-slate-600">
                Our knowledgeable staff is always available to provide
                personalized recommendations and answer your queries.
              </dt>

              <i className="uil uil-lightbulb-alt text-3xl"></i>
              <dd className="text-4xl font-extrabold text-slate-950 md:text-3xl">
                Expert Guidance
              </dd>
            </div>

            <div className="flex flex-col items-center px-4 py-8 text-center gap-4">
              <dt className="order-last text-lg font-medium text-slate-600">
                We streamline the rental process, making it easy for you to
                reserve, pick up, and return our products.
              </dt>

              <i className="uil uil-check text-3xl"></i>
              <dd className="text-4xl font-extrabold text-slate-950 md:text-3xl">
                Hassle-Free Process
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Excellence
