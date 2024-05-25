import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Fav from '../../svg/fav/fav.svg';
import {
  UilBars,
  UilEstate,
  UilBackpack,
  UilMountains,
  UilPhone,
  UilNewspaper,
  UilUsersAlt,
} from '@iconscout/react-unicons';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <Head></Head>
      <nav className="flex py-4 px-4 lg:justify-between absolute lg:items-center w-screen md:py-6 md:px-8">
        <span className="text-xl lg:text-lg font-semibold tracking-[.5rem] flex-1">
          rhent
        </span>
        {/* NAVBAR DESKTOP */}
        <ul className="lg:flex flex-2 lg:gap-8 hidden tracking-widest">
          <li>
            <Link href="/" className="underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">Product</Link>
          </li>
          <li>
            <Link href="/">Camping Package</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* NAVBAR MOBILE */}
        <ul
          className={`tracking-widest duration-300 fixed p-4 gap-4 top-16 rounded-l-3xl flex flex-col lg:gap-8 items-center border-2 border-slate-900 lg:hidden ${
            menu ? 'right-4 md:right-8' : '-right-40'
          }`}
        >
          <li>
            <Link
              href="/"
              className="mobile__link underline underline-offset-4"
            >
              <UilEstate />
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="mobile__link">
              <UilBackpack />
              Product
            </Link>
          </li>
          <li>
            <Link href="/" className="mobile__link">
              <UilMountains />
              Package
            </Link>
          </li>
          <li>
            <Link href="/" className="mobile__link">
              <UilNewspaper />
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="mobile__link">
              <UilUsersAlt />
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="mobile__link">
              <UilPhone />
              Contact
            </Link>
          </li>
          <li>
            <Link className="mobile__link mt-4 border-2 border-slate-900 px-4 py-2 rounded-full hover:bg-slate-950 duration-300 hover:text-slate-100">
              Sign In
            </Link>
          </li>
        </ul>
        <div className="flex-1 flex justify-end tracking-widest">
          <button className="hidden hover:bg-slate-950 duration-300 hover:text-slate-100 lg:block lg:border-2 lg:border-slate-900 lg:px-6 lg:py-2 lg:rounded-full">
            Sign In
          </button>
          <button className="lg:hidden" onClick={toggleMenu}>
            <UilBars />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
