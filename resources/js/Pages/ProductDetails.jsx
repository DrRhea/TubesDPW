import React, { useState } from 'react'
import Header from './../Components/Header'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'
import Reviews from './ProductDetails/Reviews'
import '../../css/hideArrow.css'
import { UilMinusSquareFull } from '@iconscout/react-unicons'

const ProductDetails = ({ equipment, categories, user, cart }) => {
  const [quantity, setQuantity] = useState(1)

  const [user_id, setUserId] = useState(user.id)
  const [equipment_id, setEquipmentId] = useState(equipment.id)
  const [duration, setDuration] = useState('')
  const [total_price, setTotalPrice] = useState(
    duration * equipment.rental_price_per_day,
  )
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('active')

  const [pay, setPay] = useState('false')

  const payToggle = (e) => {
    e.preventDefault()
    setPay(!pay)
  }

  const quantityAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const quantitySubtract = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  //function "storePost"
  const transaction = async (e) => {
    e.preventDefault()

    Inertia.post(
      '/product/instant-checkout',
      {
        user_id: user_id,
        equipment_id: equipment_id,
        duration: duration,
        total_price: total_price,
        notes: notes,
        status: status,
      },
      {
        onSuccess: () => {
          alert('Transaction success.')
        },
        onError: (errors) => {
          alert('Error')
          console.error(errors)
        },
      },
    )
  }

  const addToCart = () => {
    Inertia.post(
      '/cart/add',
      {
        equipment_id: equipment.id,
        quantity: quantity,
      },
      {
        onSuccess: () => {
          alert('Item added to cart successfully')
        },
        onError: (errors) => {
          alert('Error adding to cart')
          console.error(errors)
        },
      },
    )
  }

  const addToRent = () => {
    Inertia.post(
      '/cart/rent',
      {
        equipment_id: equipment.id,
        quantity: quantity,
      },
      {
        onSuccess: () => {
          alert('Item added to cart successfully')
        },
        onError: (errors) => {
          alert('Error adding to cart')
          console.error(errors)
        },
      },
    )
  }

  return (
    <div className="font-poppins text-slate-950">
      <Header />
      <div className="">
        <div className="font-poppins py-24 px-12">
          <div className="p-6 w-full mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full lg:sticky sm:justify-center top-0 sm:flex gap-2">
                <img
                  src={'../../img/products/' + equipment.image}
                  alt={equipment.name}
                  className="lg:w-4/5 w-full h-[300px] sm:h-[500px] lg:h-[700px]  object-cover "
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-800">
                  {equipment.name}
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="text-slate-800 text-xl font-bold">
                    Rp{equipment.rental_price_per_day * 1}
                  </p>
                  <p className="text-slate-400 text-xl">
                    <strike>Rp{equipment.rental_price_per_day * 1.2}</strike>
                    <span className="text-sm ml-1">Tax included</span>
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-800">
                    About the item
                  </h3>
                  <div>{equipment.description}</div>
                </div>
                <div className="max-w-md mt-8 flex gap-4">
                  <div>
                    <label htmlFor="Quantity" className="sr-only">
                      Quantity
                    </label>

                    <div className="flex items-center border border-gray-200">
                      <button
                        type="button"
                        className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={quantitySubtract}
                      >
                        &minus;
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={quantity}
                        className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />

                      <button
                        type="button"
                        onClick={quantityAdd}
                        className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="border-slate-950 uppercase px-4"
                    onClick={addToCart}
                  >
                    <i className="uil uil-shopping-cart text-xl text-slate-950 hover:text-slate-500 duration-300"></i>
                  </button>
                </div>
                <div className="flex flex-col gap-4 max-w-md my-8">
                  <Link
                    // onClick={addToRent}
                    onClick={payToggle}
                    className="bg-slate-950 text-slate-50 py-4 text-center uppercase duration-300 hover:bg-slate-800"
                  >
                    rent
                  </Link>
                  <Link
                    href="/product/rental"
                    className="border-slate-950 text-center border py-4 uppercase hover:bg-slate-100 duration-300"
                  >
                    buy now
                  </Link>
                </div>
                <hr />
                <Reviews />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute z-50 duration-700 ${pay ? 'top-[-100%] inset-x-0' : 'inset-0'}`}
      >
        <form
          onSubmit={transaction}
          className="flex justify-center items-center h-screen"
        >
          <div className="mb-0 mt-6 space-y-4 bg-white p-4 shadow-lg sm:p-6 lg:p-8">
            <button
              onClick={payToggle}
              className="text-right w-full flex justify-end"
            >
              <UilMinusSquareFull />
            </button>
            <p className="text-center text-lg font-medium">Create a Rental</p>

            <div>
              <label htmlFor="duration" className="sr-only">
                Duration (days)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  className="w-full border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Duration (days)"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value)
                    setTotalPrice(
                      e.target.value * equipment.rental_price_per_day,
                    )
                  }}
                  min="1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="sr-only">
                Notes
              </label>
              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  className="w-full border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Notes (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
            </div>

            {duration && (
              <>
                <p className="text-center">
                  Rp
                  {(equipment.rental_price_per_day * duration).toLocaleString(
                    'id-ID',
                    { minimumFractionDigits: 0 },
                  )}
                </p>
                <button
                  type="submit"
                  className="block w-full bg-black px-5 py-3 text-sm font-medium text-white"
                >
                  Create Rental
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductDetails
