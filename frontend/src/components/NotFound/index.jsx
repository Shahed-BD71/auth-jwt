import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
            <div className="border-t border-gray-200 text-center pt-8">
              <h1 className="md:text-9xl text-8xl font-bold text-purple-400">404</h1>
              <h1 className="md:text-6xl text-3xl font-medium py-8">oops! Page not found</h1>
              <p className="md:text-2xl text-xl pb-8 px-12 font-medium">
                Oops! The page you are looking for does not exist. It might have been moved or
                deleted.
              </p>
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white md:font-semibold font-medium md:px-6 px-4 py-3 rounded-md mr-6">
                <Link to='/'>Home</Link>
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white md:font-semibold font-medium md:px-6 px-4 py-3 rounded-md">
                <Link to='/contact-us'>Contact US</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
