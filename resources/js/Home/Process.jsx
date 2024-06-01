import React from 'react'
import { Link } from '@inertiajs/react'

const rentalSteps = {
  title: 'Renting Made Easy',
  description:
    'Follow our simple steps to rent your ideal camping gear effortlessly.',
  steps: [
    {
      stepNumber: 1,
      title: 'Browse Our Products',
      description:
        'Explore our diverse camping gear and packages with detailed descriptions and images.',
      icon: 'uil uil-credit-card-search',
    },
    {
      stepNumber: 2,
      title: 'Select Your Gear',
      description:
        'Choose the items, quantity, and rental duration. Add to cart.',
      icon: 'uil uil-compass',
    },
    {
      stepNumber: 3,
      title: 'Create an Account',
      description: 'Sign in or create an account with your contact details.',
      icon: 'uil uil-edit',
    },
    {
      stepNumber: 4,
      title: 'Proceed to Checkout',
      description:
        'Enter payment details, apply discount codes, review terms, and pay.',
      icon: 'uil uil-shopping-cart',
    },
    {
      stepNumber: 5,
      title: 'Pick Up Your Gear',
      description:
        'Visit our location or arrange delivery. Bring ID and order confirmation.',
      icon: 'uil uil-shopping-bag',
    },
    {
      stepNumber: 6,
      title: 'Enjoy and Return',
      description: 'Use, clean, and return the gear on time. Leave a review.',
      icon: 'uil uil-grin-tongue-wink',
    },
  ],
  callToAction: {
    text: 'Get Started Today!',
    url: '/product',
  },
}

const Process = () => {
  return (
    <section>
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {rentalSteps.title}
            </h2>

            <p className="mt-4 text-gray-600">{rentalSteps.description}</p>

            <Link
              href={rentalSteps.callToAction.url}
              className="mt-8 inline-block bg-slate-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring focus:ring-slate-400"
            >
              {rentalSteps.callToAction.text}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {rentalSteps.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="block border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              >
                <span className="inline-block p-3">
                  <i className={`${step.icon} text-xl`}></i>
                </span>

                <h2 className="mt-2 font-bold">{step.title}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
