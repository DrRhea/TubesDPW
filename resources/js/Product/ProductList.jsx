import React from 'react'
import { Link, usePage } from '@inertiajs/react'
import Title from './Title'
import MobileSidebar from './MobileSidebar'
import DesktopSidebar from './DesktopSidebar'
import Pagination from './Pagination'

const formatCategory = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-')
}

const ProductList = (props) => {
  const { url } = usePage()
  return (
    <section>
      <div className="mx-auto max-w-screen mt-12 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Title />
        <MobileSidebar />
        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <DesktopSidebar />

          <div className="lg:col-span-3">
            {props.products && props.products.length > 0 ? (
              <>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {props.products.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`product/${formatCategory(product.category)}/${product.id}`}
                        className="group block overflow-hidden"
                      >
                        <img
                          src={'img/products/' + product.image_url}
                          alt={product.name}
                          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                        />
                        <div className="relative bg-white pt-3">
                          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                            {product.name}
                          </h3>
                          <p className="mt-2">
                            <span className="sr-only"> Regular Price </span>
                            <span className="tracking-wider text-gray-900">
                              {product.price_per_day}
                            </span>
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Pagination />
              </>
            ) : (
              <p>belum ada product</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList
