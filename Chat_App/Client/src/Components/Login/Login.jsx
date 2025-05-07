import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
             
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Email Address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type='password'
              id="password"
              name="password"
              required
              className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
              
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Password
            </label>
            <button
              type="button"
            
              className="absolute right-4 top-3 text-sm text-indigo-500 hover:underline focus:outline-none"
            >
              
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Login
          </button>

          {/* Extra Links */}
          <div className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-indigo-600 font-medium hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
