import React, { useState } from 'react'
import { usePage } from '@inertiajs/react'
import Header from '../Components/Header'
import ProductList from './../Product/ProductList'
import Breadcrumb from './../Components/Breadcrumb'
import Footer from './../Components/Footer'
import Title from './../Product/Title'

const Product = () => {
  const { props } = usePage()
  const { auth, equipment, equipment_categories } = props
  const user = auth.user

  const [sort, setSort] = useState(false)

  const sortToggle = () => {
    setSort((prevSort) => !prevSort)
  }
  return (
    <div className="bg-white font-poppins">
      <Header />
      <div>
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-slate-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center bg-white p-2 text-slate-400"
                >
                  <span className="sr-only">Close menu</span>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Filters */}
              <form className="mt-4 border-t border-slate-200">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="px-2 py-3 font-medium text-slate-900"
                >
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Totes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Backpacks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Travel Bags
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Hip Bags
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Laptop Sleeves
                    </a>
                  </li>
                </ul>
                <div className="border-t border-slate-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-slate-400 hover:text-slate-500"
                      aria-controls="filter-section-mobile-0"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-slate-900">Color</span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          defaultValue="white"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          defaultValue="beige"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-1"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          defaultValue="blue"
                          type="checkbox"
                          defaultChecked=""
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-2"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          defaultValue="brown"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-3"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          defaultValue="green"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-4"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          defaultValue="purple"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-5"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-slate-400 hover:text-slate-500"
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-slate-900">
                        Category
                      </span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-mobile-1">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-0"
                          name="category[]"
                          defaultValue="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-0"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-1"
                          name="category[]"
                          defaultValue="sale"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-1"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-2"
                          name="category[]"
                          defaultValue="travel"
                          type="checkbox"
                          defaultChecked=""
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-2"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Travel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-3"
                          name="category[]"
                          defaultValue="organization"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-3"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Organization
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-4"
                          name="category[]"
                          defaultValue="accessories"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-4"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-slate-400 hover:text-slate-500"
                      aria-controls="filter-section-mobile-2"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-slate-900">Size</span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-mobile-2">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-size-0"
                          name="size[]"
                          defaultValue="2l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-size-0"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          2L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-size-1"
                          name="size[]"
                          defaultValue="6l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-size-1"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          6L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-size-2"
                          name="size[]"
                          defaultValue="12l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-size-2"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          12L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-size-3"
                          name="size[]"
                          defaultValue="18l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-size-3"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          18L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-size-4"
                          name="size[]"
                          defaultValue="20l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-size-4"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          20L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-size-5"
                          name="size[]"
                          defaultValue="40l"
                          type="checkbox"
                          defaultChecked=""
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-mobile-size-5"
                          className="ml-3 min-w-0 flex-1 text-slate-500"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <main className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-slate-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              New Arrivals
            </h1>
            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium text-slate-700 hover:text-slate-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={sortToggle}
                  >
                    Sort
                    <svg
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-slate-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
                <div
                  className={`absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${!sort ? 'hidden' : 'block'}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    {/*
            Active: "bg-slate-100", Not Active: ""

            Selected: "font-medium text-slate-900", Not Selected: "text-slate-500"
          */}
                    <a
                      href="#"
                      className="font-medium text-slate-900 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Most Popular
                    </a>
                    <a
                      href="#"
                      className="text-slate-500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1"
                    >
                      Best Rating
                    </a>
                    <a
                      href="#"
                      className="text-slate-500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2"
                    >
                      Newest
                    </a>
                    <a
                      href="#"
                      className="text-slate-500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Price: Low to High
                    </a>
                    <a
                      href="#"
                      className="text-slate-500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-4"
                    >
                      Price: High to Low
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-slate-400 hover:text-slate-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-slate-400 hover:text-slate-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-slate-200 pb-6 text-sm font-medium text-slate-900"
                >
                  <li>
                    <a href="#">Totes</a>
                  </li>
                  <li>
                    <a href="#">Backpacks</a>
                  </li>
                  <li>
                    <a href="#">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>
                <div className="border-b border-slate-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-slate-400 hover:text-slate-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-slate-900">Color</span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-color-0"
                          name="color[]"
                          defaultValue="white"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-color-0"
                          className="ml-3 text-sm text-slate-600"
                        >
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-1"
                          name="color[]"
                          defaultValue="beige"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-color-1"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-2"
                          name="color[]"
                          defaultValue="blue"
                          type="checkbox"
                          defaultChecked=""
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-color-2"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-3"
                          name="color[]"
                          defaultValue="brown"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-color-3"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-4"
                          name="color[]"
                          defaultValue="green"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-color-4"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-5"
                          name="color[]"
                          defaultValue="purple"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-color-5"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-slate-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-slate-400 hover:text-slate-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-slate-900">
                        Category
                      </span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          defaultValue="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-category-0"
                          className="ml-3 text-sm text-slate-600"
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          defaultValue="sale"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-category-1"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          defaultValue="travel"
                          type="checkbox"
                          defaultChecked=""
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-category-2"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Travel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          defaultValue="organization"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-category-3"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Organization
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          defaultValue="accessories"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-category-4"
                          className="ml-3 text-sm text-slate-600"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-slate-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-slate-400 hover:text-slate-500"
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-slate-900">Size</span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* Collapse icon, show/hide based on section open state. */}
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Filter section, show/hide based on section state. */}
                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-size-0"
                          name="size[]"
                          defaultValue="2l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-size-0"
                          className="ml-3 text-sm text-slate-600"
                        >
                          2L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-1"
                          name="size[]"
                          defaultValue="6l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-size-1"
                          className="ml-3 text-sm text-slate-600"
                        >
                          6L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-2"
                          name="size[]"
                          defaultValue="12l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-size-2"
                          className="ml-3 text-sm text-slate-600"
                        >
                          12L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-3"
                          name="size[]"
                          defaultValue="18l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-size-3"
                          className="ml-3 text-sm text-slate-600"
                        >
                          18L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-4"
                          name="size[]"
                          defaultValue="20l"
                          type="checkbox"
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-size-4"
                          className="ml-3 text-sm text-slate-600"
                        >
                          20L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-5"
                          name="size[]"
                          defaultValue="40l"
                          type="checkbox"
                          defaultChecked=""
                          className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-500"
                        />
                        <label
                          htmlFor="filter-size-5"
                          className="ml-3 text-sm text-slate-600"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductList
                  products={equipment}
                  categories={equipment_categories}
                  user={user}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Product
