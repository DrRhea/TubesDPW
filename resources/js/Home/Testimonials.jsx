import React, { useEffect } from 'react'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

const Testimonials = () => {
  const testimonials = [
    {
      title: 'Outstanding Service!',
      testimonial:
        'My experience with this service has been exceptional. The team is very responsive and professional in handling all my inquiries.',
      name: 'Alex Turner',
    },
    {
      title: 'Highly Recommended',
      testimonial:
        'The products I purchased here are of high quality, and the delivery was fast. I will definitely shop here again.',
      name: 'Olivia Harris',
    },
    {
      title: 'Best Prices',
      testimonial:
        'I have compared many places, and here I found the best prices for the same products. Amazing!',
      name: 'Noah Clark',
    },
    {
      title: 'Friendly and Fast Service',
      testimonial:
        'The staff is very friendly and quick in responding to my requests. I am very satisfied with the service.',
      name: 'Sophia Lewis',
    },
    {
      title: 'Very Helpful',
      testimonial:
        "This website provides very helpful and easy-to-understand information. It's been very useful to me.",
      name: 'Ethan White',
    },
    {
      title: 'Pleasant Shopping Experience',
      testimonial:
        'Shopping here is easy and enjoyable. The system is user-friendly, and there are many product choices.',
      name: 'Mia Walker',
    },
    {
      title: 'Guaranteed Product Quality',
      testimonial:
        'The products I received match the description and are of very good quality. I am very pleased with my purchase.',
      name: 'Lucas Hall',
    },
    {
      title: 'Fast and Efficient',
      testimonial:
        'The ordering and delivery process was very fast and efficient. I greatly appreciate the professionalism of the team.',
      name: 'Emma Young',
    },
    {
      title: 'Excellent Customer Service',
      testimonial:
        'The customer service here is very helpful and always ready to answer my questions clearly. Thank you!',
      name: 'Benjamin King',
    },
    {
      title: 'Very Satisfied with the Results',
      testimonial:
        'I am very satisfied with the final product I purchased. The quality is outstanding and meets my expectations.',
      name: 'Isabella Wright',
    },
  ]

  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    })

    const keenSliderPrevious = document.getElementById('keen-slider-previous')
    const keenSliderNext = document.getElementById('keen-slider-next')

    const keenSliderPreviousDesktop = document.getElementById(
      'keen-slider-previous-desktop',
    )
    const keenSliderNextDesktop = document.getElementById(
      'keen-slider-next-desktop',
    )

    if (keenSliderPrevious) {
      keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
    }
    if (keenSliderNext) {
      keenSliderNext.addEventListener('click', () => keenSlider.next())
    }
    if (keenSliderPreviousDesktop) {
      keenSliderPreviousDesktop.addEventListener('click', () =>
        keenSlider.prev(),
      )
    }
    if (keenSliderNextDesktop) {
      keenSliderNextDesktop.addEventListener('click', () => keenSlider.next())
    }

    const interval = setInterval(() => {
      keenSlider.next()
    }, 3000)

    return () => {
      keenSlider.destroy()
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="">
      <div className="mx-auto max-w-screen px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What Our Customers Say
            </h2>

            <p className="mt-4 text-slate-700">
              Stay up-to-date on the latest news and articles from our industry.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4 justify-center">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="border border-slate-600 p-3 text-slate-600 transition hover:bg-slate-950 hover:text-white"
              >
                <i className="uil uil-angle-left-b" />
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="border border-slate-600 p-3 text-slate-600 transition hover:bg-slate-950 hover:text-white"
              >
                <i className="uil uil-angle-right-b" />
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-slate-500">
                        <i className="uil uil-star" />
                        <i className="uil uil-star" />
                        <i className="uil uil-star" />
                        <i className="uil uil-star" />
                        <i className="uil uil-star" />
                      </div>

                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                          {testimonial.title}
                        </h3>

                        <p className="mt-4 text-slate-600">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-slate-500">
                      &mdash; {testimonial.name}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className=" border border-slate-600 p-4 text-slate-600 transition hover:bg-slate-600 hover:text-white"
              >
                <i className="uil uil-angle-left-b" />
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="border border-slate-600 p-4 text-slate-600 transition hover:bg-slate-600 hover:text-white"
              >
                <i className="uil uil-angle-right-b" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
