import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { UilAt } from '@iconscout/react-unicons';

const SignIn = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

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
        <form action="" className="flex justify-center flex-col gap-4">
          {isSignUp && (
            <input
              type="text"
              name=""
              id=""
              placeholder="Full name"
              className="border-1 border-slate-300 px-4 py-2"
            />
          )}
          <input
            type="text"
            name=""
            id=""
            placeholder="Email address"
            className="border-1 border-slate-300 px-4 py-2"
          />

          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="border-1 border-slate-300 px-4 py-2"
          />

          {isSignUp && (
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="border-1 border-slate-300 px-4 py-2"
            />
          )}

          {!isSignUp && (
            <div className="flex flex-col gap-2 px-4 my-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="cursor-pointer"
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
  );
};

export default SignIn;
