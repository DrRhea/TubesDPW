import React, { useState } from 'react'

const DesktopSidebar = ({ categories }) => {
  // State to manage filter options
  const [filters, setFilters] = useState({
    inStock: false,
    preOrder: false,
    outOfStock: false,
    selectedCategories: [],
  })

  // Function to handle filter reset
  const handleReset = () => {
    setFilters({
      inStock: false,
      preOrder: false,
      outOfStock: false,
      selectedCategories: [],
    })
  }

  return (
    <div className="hidden space-y-4 lg:block">
      <div>
        <label
          htmlFor="SortBy"
          className="block text-xs font-medium text-gray-700"
        >
          Sort By
        </label>
        <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
          <option value="">Sort By</option>
          <option value="name, DESC">Name, DESC</option>
          <option value="name, ASC">Name, ASC</option>
          <option value="rental_price_per_day, DESC">Rental Price, DESC</option>
          <option value="rental_price_per_day, ASC">Rental Price, ASC</option>
          <option value="purchase_price, DESC">Purchase Price, DESC</option>
          <option value="purchase_price, ASC">Purchase Price, ASC</option>
          <option value="availability_status, DESC">
            Availability Status, DESC
          </option>
          <option value="availability_status, ASC">
            Availability Status, ASC
          </option>
          <option value="brand, DESC">Brand, DESC</option>
          <option value="brand, ASC">Brand, ASC</option>
        </select>
      </div>

      <div>
        <p className="block text-xs font-medium text-gray-700">Filters</p>
        <div className="mt-1 space-y-2">
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Availability </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={handleReset} // Reset button click handler
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterInStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      In Stock
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterPreOrder"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPreOrder"
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      Pre Order
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterOutOfStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      Out of Stock
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Category </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={handleReset} // Reset button click handler
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                {/* Filter options */}
                {categories.map((category) => (
                  <li key={category.id}>
                    <label
                      htmlFor={`FilterCategory${category.id}`}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={`FilterCategory${category.id}`}
                        className="size-5 rounded border-gray-300"
                        checked={filters.selectedCategories.includes(
                          category.id,
                        )} // Check if category is selected
                        onChange={(e) => {
                          // Update selected categories
                          const categoryId = category.id
                          if (e.target.checked) {
                            setFilters((prevFilters) => ({
                              ...prevFilters,
                              selectedCategories: [
                                ...prevFilters.selectedCategories,
                                categoryId,
                              ],
                            }))
                          } else {
                            setFilters((prevFilters) => ({
                              ...prevFilters,
                              selectedCategories:
                                prevFilters.selectedCategories.filter(
                                  (id) => id !== categoryId,
                                ),
                            }))
                          }
                        }}
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {category.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default DesktopSidebar
