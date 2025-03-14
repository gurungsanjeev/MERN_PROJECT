import React from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <>
<div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login Up</h2>
        <form  className="space-y-4">
          

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="example@.com"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
            placeholder="password"
             
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>
          <label htmlFor="text">Don't have an account!</label>
          
        </form>
       <NavLink to="/signup"> <button
            type="submit"
            
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button></NavLink>
      </div>
    </div>

    </>
  )
}

export default Login
