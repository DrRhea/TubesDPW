import React from 'react'
import Header from '../Components/Header'
import HeroImg from '../../img/hero/hero.jpg'

const Hero = () => {
  return (
    <main className="bg-gradient-to-b from-slate-200 to-white snap-always snap-center h-fit flex flex-col">
      <Header />
      <div className="min-h-fit w-screen px-8 pt-24 max-lg:pt-20 max-md:pt-16 max-md:px-4 flex-1">
        <div className="w-full justify-between gap-8 min-h-fit flex max-lg:flex-col">
          <div className="flex-1 flex flex-col gap-8 max-lg:gap-4 self-center max-sm:text-center 2xl:gap-10">
            <h1 className="text-6xl max-xl:text-5xl max-md:text-4xl font-playfair leading-snug 2xl:text-7xl">
              Embrace the Adventure Experience the Thrill of Camping
            </h1>
            <p className="text-xl font-light max-xl:text-lg max-md:text-base max-sm:line-clamp-3">
              Escape the ordinary and immerse yourself in the beauty of nature
              with an unforgettable camping experience. Whether you're a
              seasoned camper or a curious beginner, we have something for
              everyone. Our camping adventures offer a chance to reconnect with
              the outdoors, unplug from technology, and create memories that
              will last a lifetime.
            </p>
            <button className="border border-slate-950 w-fit max-lg:text-lg px-8 py-2 text-lg max-xl:text-base bg-slate-950 text-slate-50 max-md:text-base max-sm:text-sm max-sm:self-center max-[360px]:text-[12px] duration-300 hover:bg-slate-800">
              Book Your Camping Adventure Today
            </button>
          </div>
          <div className="flex-1">
            <img
              src={HeroImg}
              alt=""
              className="w-full h-[700px] object-cover max-lg:w-full max-lg:max-h-[500px] max-md:max-h-[400px] max-sm:max-h-[300px] max-[360px]:max-h-[150px] object-center max-xl:h-[600px] drop-shadow-sm"
            />
            <p className="font-playfair text-lg max-lg:text-xl max-md:text-lg max-sm:text-base max-sm:text-center mt-2 max-xl:text-base font-semibold sm:ml-4 max-[360px]:text-sm">
              Book Your Camping Adventure Today, Explore the Beauty of Nature
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
