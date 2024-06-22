import Header from '@/Components/Header'
import React, { useState } from 'react'
import moment from 'moment'
import { Link } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'

const Return = ({ rentals }) => {
  const [bookingId, setBookingId] = useState('')
  const returnHandler = async (e) => {
    e.preventDefault()

    Inertia.post(
      '/product/instant-return',
      {
        id: bookingId,
      },
      {
        onSuccess: () => {
          alert('Return success.')
        },
        onError: (errors) => {
          alert('Error')
          console.error(errors)
        },
      },
    )
  }
  return (
    <div className="bg-white">
      <Header />
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {rentals.map((rental, index) => (
                <div
                  key={rental.id}
                  className="border-b border-t border-gray-200 bg-white shadow-sm sm:border"
                >
                  <h3 className="sr-only">
                    Order placed on
                    <time dateTime={rental.created_at}>
                      {moment(rental.created_at).format('MMM D, YYYY')}
                    </time>
                  </h3>
                  <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                    <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Order number
                        </dt>
                        <dd className="mt-1 text-gray-500">WU88191111</dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">
                          Date placed
                        </dt>
                        <dd className="mt-1 text-gray-500">
                          <time dateTime={rental.created_at}>
                            {moment(rental.created_at).format('MMM D, YYYY')}
                          </time>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">
                          Total amount
                        </dt>
                        <dd className="mt-1 font-medium text-gray-900">
                          Rp
                          {rental.total_price.toLocaleString('id-ID', {
                            minimumFractionDigits: 0,
                          })}
                        </dd>
                      </div>
                    </dl>
                    <div className="relative flex justify-end lg:hidden">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
                          id="menu-0-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                        >
                          <span className="sr-only">
                            Options for order WU88191111
                          </span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-0-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <Link
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-0-item-0"
                          >
                            View
                          </Link>
                          <Link
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-0-item-1"
                          >
                            Invoice
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <Link
                        href="#"
                        className="flex items-center justify-center border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        <span>View Order</span>
                        <span className="sr-only">WU88191111</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center justify-center border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        <span>View Invoice</span>
                        <span className="sr-only">for order WU88191111</span>
                      </Link>
                    </div>
                  </div>
                  {/* Products */}
                  <h4 className="sr-only">Items</h4>
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="p-4 sm:p-6">
                      <div className="flex items-center sm:items-start">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                          <img
                            src={`/img/products/${rental.equipment.image}`}
                            alt={`/images/${rental.equipment.name}`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-6 flex-1 text-sm">
                          <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                            <h5>{rental.equipment.name}</h5>
                            <p className="mt-2 sm:mt-0">
                              Rp
                              {rental.total_price.toLocaleString('id-ID', {
                                minimumFractionDigits: 0,
                              })}
                            </p>
                          </div>
                          <p className="hidden text-gray-500 sm:mt-2 sm:block">
                            {rental.equipment.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 sm:flex sm:justify-between">
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="ml-2 text-sm font-medium text-gray-500">
                            Delivered on{' '}
                            <time dateTime={rental.created_at}>
                              {moment(rental.created_at).format('MMM D, YYYY')}
                            </time>
                          </p>
                        </div>
                        <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                          <div className="flex flex-1 justify-center">
                            {rental.status === 'returned' ? (
                              <div className="text-gray-400 font-normal">
                                Returned
                              </div>
                            ) : (
                              <form onSubmit={returnHandler}>
                                <button
                                  type="submit"
                                  onClick={() => setBookingId(rental.id)}
                                  className="whitespace-nowrap text-black hover:text-black"
                                >
                                  Return
                                </button>
                              </form>
                            )}
                          </div>
                          <div className="flex flex-1 justify-center pl-4">
                            <Link
                              href={`/product/details/${rental.equipment_id}`}
                              className="whitespace-nowrap text-black hover:text-black"
                            >
                              Buy again
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Return
