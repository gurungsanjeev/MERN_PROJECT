import React, { useState } from 'react';
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

  });
  const [file, setFile] = useState(null)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('User registered:', formData);


    /// creating the formDetails obj
    const formDetails = new FormData()
    formDetails.append("username", formData.username);
    formDetails.append("email", formData.email);
    formDetails.append("password", formData.password);
    if (file) {
      formDetails.append("image", file);
    }
  
    
    try {
     const response = await axios.post('http://localhost:5000/chat/user/register', formDetails)
     console.log("response", response)
     if(response.data.msg==="success"){
        openLogin()
      }
    } catch (err) {
      console.log(err)
    }

  };

  return (

    <div className="min-h-screen bg-[url('/images/land-image.jpg')] bg-no-repeat bg-cover bg-center  flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="Full Name">Full Name</label>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="Confirm Password">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="Upload images">Upload image</label>
          <input type="file" name="images" id=""
            onChange={(e) => setFile(e.target.files[0])}
            className='w-full py-2 border px-4 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500' />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
