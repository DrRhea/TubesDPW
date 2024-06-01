import React, { useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import Tent from '../../img/products_category/tent.webp'
import SleepingBag from '../../img/products_category/sleeping-bag.webp'
import CookingEquipment from '../../img/products_category/cooking-equipment.webp'
import MattressAndInflatableMat from '../../img/products_category/mattress-and-inflatable-mat.webp'
import OutdoorClothing from '../../img/products_category/outdoor-clothing.webp'
import AdditionalAccessories from '../../img/products_category/additional-accessories.webp'
import SafetyEquipment from '../../img/products_category/safety-equipment.webp'

// Simpan nama item terkait dengan URL gambarnya
const productNames = {
  [Tent]: 'Tent',
  [SleepingBag]: 'Sleeping Bag',
  [CookingEquipment]: 'Cooking Equipment',
  [MattressAndInflatableMat]: 'Mattress and Inflatable Mat',
  [OutdoorClothing]: 'Outdoor Clothing',
  [AdditionalAccessories]: 'Additional Accessories',
  [SafetyEquipment]: 'Safety Equipment',
}

const Products = () => {
  useEffect(() => {
    const slider = document.getElementById('keeen-slider')
    if (slider) {
      const keenSlider = new KeenSlider(slider, {
        loop: true,
        slides: {
          perView: 1,
          spacing: 10,
        },
        breakpoints: {
          '(min-width: 464px)': {
            slides: { perView: 2, spacing: 15 },
          },
          '(min-width: 1024px)': {
            slides: { perView: 4, spacing: 20 },
          },
        },
      })

      const interval = setInterval(() => {
        keenSlider.next()
      }, 3000)

      return () => {
        keenSlider.destroy()
        clearInterval(interval)
      }
    }
  }, [])

  // Dapatkan nama item dari URL gambar menggunakan objek productNames
  const getItemName = (url) => {
    return productNames[url] || 'Unknown' // Default jika nama tidak ditemukan
  }

  return (
    <section>
      <div className="mx-auto w-full px-4 py-8 sm:py-12">
        <div id="keeen-slider" className="keen-slider">
          {[
            Tent,
            SleepingBag,
            CookingEquipment,
            MattressAndInflatableMat,
            OutdoorClothing,
            AdditionalAccessories,
            SafetyEquipment,
          ].map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <Link
                href={`/products/${getItemName(item).toLowerCase().replace(/\s+/g, '-')}`}
                className="group block overflow-hidden"
              >
                <img
                  src={item}
                  alt=""
                  loading="lazy"
                  className="h-[350px] brightness-75 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-base text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {getItemName(item)}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
