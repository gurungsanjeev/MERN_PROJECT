import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../../Context/AuthProvider'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'


const Signup = () => {
    const navigate = useNavigate();

    const { authUser, setAuthUser } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        console.log(userInfo);

        //making the connection with the database using the axios
        await axios.post('/api/user/signup', userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup successfully");
                    navigate('/login')
                }
                localStorage.setItem("token", JSON.stringify(res.data))
                setAuthUser(res.data);
            })

            .catch((err) => {
                // if (err.response)
                //     alert("error" + err.response.data.error)
                toast.error("error in signup" + err);
            })

    }

    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "")
    const validatePasswordMatch = (value) => {
        return value === password || "Password and confirm password doesn't match";
    }


    return (
        <>



            <div className=' min-w-screen flex max-h-screen h-screen'>
                <div
                    className="right w-full flex items-center justify-center bg-cover bg-center "
                    style={{ backgroundImage: "url('/images/signup_Background.jpg')" }}
                >

                    <div className="left  w-[40%] max-w-[40%]">

                        <h1 className='text-5xl text-slate-50 font-edu font-medium'>Sign Up Today.</h1>
                        <h1 className='text-5xl text-slate-50 mt-6 font-edu'>Start Your Journey.</h1>


                    </div>

                    {/* <div className="right bg-slate-900 w-[80%] flex justify-center items-center"> */}
                    <div className="signup w-[100%] max-w-md bg-white p-8 rounded-2xl shadow-xl">
                        {/* Heading */}
                        <div className="text-center mb-6">
                            <h1 className='text-3xl font-bold text-gray-800'>Sign Up</h1>
                            <p className='text-gray-500 mt-2'>Create your account to get started</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-4">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                                    Name {errors.name && <span className='text-red-500'>*</span>}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    {...register("name", { required: true })}
                                />

                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                                    Email {errors.email && <span className='text-red-500'>*</span>}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    {...register("email", { required: true })}
                                />

                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                                    Password {errors.password && <span className='text-red-500'>*</span>}
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    {...register("password", { required: true })}
                                />

                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">
                                    Confirm Password {errors.confirmPassword && <span className='text-red-500'>*</span>}
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    {...register("confirmPassword", { required: true, validate: validatePasswordMatch })}
                                />
                                {errors.confirmPassword && <span span className='text-red-500'>{errors.confirmPassword.message}</span>}

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
                            >
                                Sign Up
                            </button>
                        </form>

                        {/* Footer */}
                        <p className='text-center text-gray-500 mt-4'>
                            Already have an account? <span className='text-blue-600 hover:underline cursor-pointer'><NavLink to='/login'>Login</NavLink></span>
                        </p>
                    </div>


                    {/* </div> */}
                </div >
            </div >
        </>
    )
}

export default Signup
