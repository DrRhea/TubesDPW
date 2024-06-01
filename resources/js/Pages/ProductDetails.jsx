import React from 'react'
import Header from './../Components/Header'

const ProductDetails = (props) => {
  return (
    <div className="font-poppins">
      <section>
        <Header />
      </section>
      <div className="font-poppins py-24 px-12">
        <div className="p-6 w-full mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full lg:sticky sm:justify-center top-0 sm:flex gap-2">
              <img
                src={'../../img/products/' + props.product.image_url}
                alt={props.product.name}
                className="lg:w-4/5 w-full h-[300px] sm:h-[500px] lg:h-[700px]  object-cover "
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">
                {props.product.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-slate-800 text-xl font-bold">
                  Rp{props.product.price_per_day * 1}
                </p>
                <p className="text-slate-400 text-xl">
                  <strike>Rp{props.product.price_per_day * 1.2}</strike>
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-slate-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-slate-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-slate-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-slate-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-800">Sizes</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-slate-800 font-semibold text-sm  flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-slate-800 border-slate-800 font-semibold text-sm  flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-slate-800 font-semibold text-sm  flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-slate-800 font-semibold text-sm  flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-slate-800">
                    Choose a Color
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-12 h-12 bg-black border-2 border-white hover:border-slate-800  shrink-0"
                    ></button>
                    <button
                      type="button"
                      className="w-12 h-12 bg-slate-400 border-2 border-white hover:border-slate-800  shrink-0"
                    ></button>
                    <button
                      type="button"
                      className="w-12 h-12 bg-orange-400 border-2 border-white hover:border-slate-800  shrink-0"
                    ></button>
                    <button
                      type="button"
                      className="w-12 h-12 bg-red-400 border-2 border-white hover:border-slate-800  shrink-0"
                    ></button>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-4 px-4 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold "
                >
                  Add to cart
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-800">
                  About the item
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-slate-800">
                  <li>
                    A slate t-shirt is a wardrobe essential because it is so
                    versatile.
                  </li>
                  <li>
                    Available in a wide range of sizes, from extra small to
                    extra large, and even in tall and petite sizes.
                  </li>
                  <li>
                    This is easy to care for. They can usually be machine-washed
                    and dried on low heat.
                  </li>
                  <li>
                    You can add your own designs, paintings, or embroidery to
                    make it your own.
                  </li>
                </ul>
              </div>

              <div className="mt-8 max-w-md">
                <h3 className="text-lg font-bold text-slate-800">
                  Reviews(10)
                </h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center">
                    <p className="text-sm text-slate-800 font-bold">5.0</p>
                    <svg
                      className="w-5 fill-slate-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-slate-300  w-full h-2 ml-3">
                      <div className="w-2/3 h-full  bg-slate-800"></div>
                    </div>
                    <p className="text-sm text-slate-800 font-bold ml-3">66%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-slate-800 font-bold">4.0</p>
                    <svg
                      className="w-5 fill-slate-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-slate-300  w-full h-2 ml-3">
                      <div className="w-1/3 h-full  bg-slate-800"></div>
                    </div>
                    <p className="text-sm text-slate-800 font-bold ml-3">33%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-slate-800 font-bold">3.0</p>
                    <svg
                      className="w-5 fill-slate-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-slate-300  w-full h-2 ml-3">
                      <div className="w-1/6 h-full  bg-slate-800"></div>
                    </div>
                    <p className="text-sm text-slate-800 font-bold ml-3">16%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-slate-800 font-bold">2.0</p>
                    <svg
                      className="w-5 fill-slate-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-slate-300  w-full h-2 ml-3">
                      <div className="w-1/12 h-full  bg-slate-800"></div>
                    </div>
                    <p className="text-sm text-slate-800 font-bold ml-3">8%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-slate-800 font-bold">1.0</p>
                    <svg
                      className="w-5 fill-slate-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-slate-300  w-full h-2 ml-3">
                      <div className="w-[6%] h-full  bg-slate-800"></div>
                    </div>
                    <p className="text-sm text-slate-800 font-bold ml-3">6%</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-slate-800 text-slate-800 font-bold "
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
