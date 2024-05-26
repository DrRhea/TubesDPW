import React from 'react';
import Header from '../Components/Header';
import HeroImg from '../../img/hero/hero.jpg';

const Hero = () => {
  return (
    <main className="bg-gradient-to-b from-slate-200 to-white">
      <Header />
      <div className="min-h-fit w-screen px-8 py-24 max-lg:py-20 max-md:py-16 max-md:px-4">
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
          <img
            src={HeroImg}
            alt=""
            className="flex-1 w-1/2 h-[700px] object-cover max-lg:w-full max-lg:max-h-[500px] max-md:max-h-[400px] max-sm:max-h-[300px] max-[360px]:max-h-[150px] object-center max-xl:h-[600px]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
