import React from 'react'
import Img1 from '../../img/blog/blog-img-1.webp'
import Img2 from '../../img/blog/blog-img-2.webp'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Benefits of Renting Camping Gear for Your Vacation',
      images: Img1,
      content: `
            Spending time outdoors can be an enjoyable and exciting experience. However, having complete and high-quality camping gear is key to a comfortable and safe vacation. Here are some benefits of renting camping gear:
            - Save Money: No need to spend a lot of money on equipment that may only be used once or twice a year.
            - Access to Quality Equipment: Rentals usually provide high-quality equipment that might be too expensive to buy.
            - Convenience and Practicality: No need to carry equipment from home, especially if traveling long distances.
        `,
    },
    {
      title: 'Guide to Choosing a Camping Gear Rental Service',
      images: Img2,
      content: `
            Choosing the right camping gear rental service is crucial to ensure a pleasant camping experience. Here are some tips for selecting a rental service:
            - Review Ratings and Testimonials: Read reviews from previous customers to get an idea of the service quality.
            - Check Equipment Condition: Ensure that the rented equipment is in good and well-maintained condition.
            - Compare Prices: Compare prices from several providers to get the best deal.
            - Customer Service: Choose a provider that is responsive and offers assistance if there are issues with the equipment.
        `,
    },
  ]
  return (
    <section>
      <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              {blogPosts.map((post, index) => (
                <li key={index}>
                  <article className="group">
                    <img
                      alt={post.title}
                      src={post.images}
                      loading="lazy"
                      className="h-56 w-full object-cover shadow-xl transition duration-300 group-hover:brightness-[75%]"
                    />

                    <div className="p-4">
                      <a href="#">
                        <h3 className="text-lg font-medium text-slate-900">
                          {post.title}
                        </h3>
                      </a>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-slate-500">
                        {post.content}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid place-content-center bg-slate-50 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-slate-900 sm:text-3xl">
                  Latest News and Articles
                </h2>

                <p className="mt-4 text-slate-500">
                  Stay up-to-date on the latest news and articles from our
                  industry.
                </p>
              </header>

              <a
                href="#"
                className="mt-8 inline-block border border-slate-900 bg-slate-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
