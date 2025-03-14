import React from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';



const Signup = () => {
   
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  



    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/signup', {name,email,password})
        .then(result=> console.log(result))
        .catch(err=> console.log(err))
    }


  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form  className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              onChange={(e)=>{
                setName(e.target.value)
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Example@.com"
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
                placeholder="Enter your password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register 
          </button>
          <label htmlFor="text" >Already Have an Account</label>
       
       <NavLink to="/"><button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login 
          </button>
          </NavLink>
       
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup;
