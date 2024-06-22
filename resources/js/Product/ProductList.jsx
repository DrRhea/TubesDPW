import React from 'react'
import { Link, usePage } from '@inertiajs/react'

const formatCategory = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-')
}

const getCategoryName = (categoryId, categories) => {
  if (!categories) {
    return 'Unknown'
  }
  const category = categories.find((cat) => cat.id === categoryId)
  return category ? category.name : 'Unknown'
}

const ProductList = ({ products, categories, user }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={'product/details/' + product.id}
              className="group text-sm"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-100 group-hover:opacity-75">
                <img
                  src={'../img/products/' + product.image}
                  alt={product.description}
                  className="h-[350px] w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.category_id}</p>
              <p className="mt-2 font-medium text-gray-900">
                Rp{product.rental_price_per_day}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
