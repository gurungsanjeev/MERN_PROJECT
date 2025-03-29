import React from 'react'
import Navbar from '../../Components/Navbar'
import SignUp from '../SignUp/SignUp'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(result=> {console.log(result)
            if(result.data.message === "Success"){

                navigate('/home')
            }
        })
        .catch(err=>console.log(err));
    }
    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
                    <div className="flex flex-col w-full max-w-sm p-6 rounded-lg shadow-lg bg-white">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Login</h2>

                        <label htmlFor="username" className="text-gray-700 mb-1 font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="p-2 mb-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />

                        <label htmlFor="password" className="text-gray-700 mb-1 font-medium">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            autoComplete='current-password'
                            className="p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />

                        <button 
                        className="bg-blue-500
                         text-white
                          font-semibold 
                          py-2 px-4 
                          rounded-lg
                           hover:bg-blue-600 transition-all" >
                            Login
                        </button>
                        <div className='flex m-2 gap-2'>
                            <h5 className='text-sm'>Don't have account?</h5>
                            <Link to="/signup">
                                <h5 className='text-sm text-blue-500'>Signup Now!</h5>
                            </Link>

                        </div>
                    </div>
                </div>
                </form>
          


        </>
    )
}

export default Login
