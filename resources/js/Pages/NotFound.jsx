import React from 'react'
import { Link } from '@inertiajs/react'

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 font-poppins">
      <div className="text-center">
        <h1 className="text-9xl font-black text-slate-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-slate-500">We can't find that page.</p>
        <Link
          href="/"
          className="mt-6 inline-block bg-slate-950 duration-300 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
