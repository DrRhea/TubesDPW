import React, { useState, useEffect } from 'react'
import { Link, Head, usePage, useForm } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
import {
  UilBars,
  UilEstate,
  UilBackpack,
  UilMountains,
  UilPhone,
  UilNewspaper,
  UilUsersAlt,
  UilHeartAlt,
  UilShoppingCart,
  UilSignout,
  UilBox,
} from '@iconscout/react-unicons'
import SignIn from '../Components/SignIn'

const Header = () => {
  const { props } = usePage()
  const { auth, equipment, equipment_categories } = props
  const user = auth.user

  const { url } = usePage() // Get the current URL
  const [menu, setMenu] = useState(false)
  const [login, setLogin] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const toggleLogin = () => {
    setLogin(!login)
  }

  const closeLogin = () => {
    setLogin(false)
  }

  const isActiveLink = (href) => url === href

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLogout = () => {
    Inertia.post(route('logout'))
  }

  return (
    <div className="relative">
      <Head></Head>
      <header
        className={`flex fixed py-4 px-4 z-40 lg:justify-between ${scrolled && 'bg-white shadow-sm'} backdrop-blur-sm lg:items-center w-screen md:py-6 md:px-8 duration-300`}
      >
        <span className="text-xl lg:text-lg font-semibold tracking-[.5rem] flex-1 font-playfair">
          rhent
        </span>
        {/* NAVBAR DESKTOP */}
        <ul className="lg:flex flex-2 lg:gap-8 hidden tracking-widest">
          <li>
            <Link
              href="/"
              className={`hover:text-slate-500 duration-300 ${
                isActiveLink('/')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className={`hover:text-slate-500 duration-300 ${
                isActiveLink('/product')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/package"
              className={`hover:text-slate-500 duration-300 ${
                isActiveLink('/package')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              Camping Package
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`hover:text-slate-500 duration-300 ${
                isActiveLink('/blog')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-slate-500 duration-300 ${
                isActiveLink('/about')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-slate-500 duration-300 ${
                isActiveLink('/contact')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* NAVBAR MOBILE */}
        <ul
          className={`tracking-widest duration-300 fixed p-8 gap-4 top-16 flex flex-col lg:gap-8 items-center bg-slate-50 drop-shadow-sm lg:hidden z-40 ${
            menu ? 'right-4 md:right-8' : '-right-40'
          }`}
        >
          <li>
            <Link
              href="/"
              className={`mobile__link ${
                isActiveLink('/')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              <UilEstate />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className={`mobile__link ${
                isActiveLink('/product')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              <UilBackpack />
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/package"
              className={`mobile__link ${
                isActiveLink('/package')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              <UilMountains />
              Package
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`mobile__link ${
                isActiveLink('/blog')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              <UilNewspaper />
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`mobile__link ${
                isActiveLink('/about')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              <UilUsersAlt />
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`mobile__link ${
                isActiveLink('/contact')
                  ? 'underline underline-offset-4'
                  : 'text-slate-700'
              }`}
            >
              <UilPhone />
              Contact
            </Link>
          </li>
          <li>
            <button
              className="mobile__link mt-4 border-2 border-slate-900 px-4 py-2 hover:bg-slate-950 duration-300 hover:text-slate-100"
              onClick={toggleLogin}
            >
              Sign In
            </button>
          </li>
        </ul>
        <div className="flex-1 flex justify-end tracking-widest">
          {!user ? (
            <button
              className="hidden hover:bg-slate-950 duration-300 hover:text-slate-100 lg:block lg:border-2 lg:border-slate-900 lg:px-6 lg:py-2"
              onClick={toggleLogin}
            >
              Sign In
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/return">
                <UilBox />
              </Link>
              <Link href="">
                <UilHeartAlt />
              </Link>
              <Link href="">
                <UilShoppingCart />
              </Link>
              <button onClick={handleLogout}>
                <UilSignout />
              </button>
            </div>
          )}
          <button className="lg:hidden" onClick={toggleMenu}>
            <UilBars />
          </button>
        </div>
      </header>
      {login && <SignIn onClose={closeLogin} />}
    </div>
  )
}

export default Header
