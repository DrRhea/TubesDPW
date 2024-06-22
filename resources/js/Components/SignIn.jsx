import React, { useEffect, useState } from 'react'
import { Link, useForm } from '@inertiajs/react'
import InputError from './InputError'

const SignIn = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const submit = (e) => {
    e.preventDefault()
    if (isSignUp) {
      post(route('register'), {
        onSuccess: () => onClose(),
        onError: () => console.log(errors),
      })
    } else {
      post(route('login'), {
        onSuccess: () => onClose(),
        onError: () => console.log(errors),
      })
    }
  }

  return (
    <div
      className="fixed tracking-widest backdrop-blur-sm duration-300 min-h-screen w-screen z-40 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-50 w-full sm:w-fit p-6 sm:p-8 drop-shadow-sm flex flex-col gap-6 sm:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="tracking-[.5rem] text-3xl sm:text-4xl self-center font-medium mb-4 font-playfair">
          rhent
        </span>
        <span className="self-center text-base sm:text-lg font-medium mb-2">
          {isSignUp ? 'Create a new account' : 'Sign in to your account'}
        </span>
        <form className="flex justify-center flex-col gap-4" onSubmit={submit}>
          {isSignUp && (
            <label
              htmlFor="name"
              className="relative block overflow-hidden border-b border-slate-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                isFocused={true}
                placeholder=""
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setData('name', e.target.value)}
                required
              />

              <InputError message={errors.name} className="mt-2" />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-slate-700 font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Full Name
              </span>
            </label>
          )}
          <label
            htmlFor="email"
            className="relative block overflow-hidden border-b border-slate-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              placeholder=""
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e) => setData('email', e.target.value)}
              required
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-slate-700 font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
          </label>

          <label
            htmlFor="password"
            className="relative block overflow-hidden border-b border-slate-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              placeholder=""
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e) => setData('password', e.target.value)}
              required
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-slate-700 font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Password
            </span>
          </label>

          {isSignUp && (
            <label
              htmlFor="password_confirmation"
              className="relative block overflow-hidden border-b border-slate-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={data.password_confirmation}
                placeholder=""
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) =>
                  setData('password_confirmation', e.target.value)
                }
                required
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-slate-700 font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Confirm Password
              </span>
            </label>
          )}

          {!isSignUp && (
            <div className="flex flex-col gap-2 px-4 my-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="cursor-pointer"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                />
                <label
                  htmlFor="remember"
                  className="select-none cursor-pointer text-slate-500"
                >
                  Remember me on this device
                </label>
              </div>
              <Link className="underline underline-offset-4 hover:text-slate-600 duration-300 mt-2">
                Forgot password?
              </Link>
            </div>
          )}
          <button
            type="submit"
            className="text-slate-50 bg-slate-950 hover:bg-slate-800 duration-300 py-2"
            disabled={processing}
          >
            {isSignUp ? 'Sign up' : 'Sign in'}
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-slate-300" />
          <span className="mx-2 text-slate-800">Or</span>
          <hr className="flex-1 border-t border-slate-300" />
        </div>
        <button className="text-white py-2 px-4 hover:bg-blue-400 duration-300 bg-blue-500">
          {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
        </button>
        <span className="self-center mt-2 text-sm sm:text-base">
          {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}{' '}
          <button onClick={toggleForm} className="underline">
            {isSignUp ? 'Sign in here' : 'Sign up here'}
          </button>
        </span>
      </div>
    </div>
  )
}

export default SignIn
