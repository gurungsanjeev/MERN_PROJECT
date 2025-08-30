import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useAuth } from '../../Context/AuthProvider'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import Signup from './Signup'
import toast from 'react-hot-toast'

const Login = () => {

    const { authUser, setAuthUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const loginedUser = {
            email: data.email,
            password: data.password
        }

        axios.post('/api/user/login', loginedUser)

            .then((res) => {
                console.log(res.data);

                if (res.data) {
                    toast.success("Loggined Successfully")
                }
                localStorage.setItem("token", JSON.stringify(res.data))
                setAuthUser(res.data);
                navigate('/home')

            })

            .catch((error) => {
                if (error.response) {
                    toast.error("Error " + error.response.data.message);
                }
            })

    }
    return (
        <div
            className='w-full flex justify-around  items-center max-h-screen h-screen  '
            style={{ backgroundImage: "url(/images/login_background.jpg)", backgroundSize: "cover", backgroundPosition: "center", }}>


            <div className='loginCard w-[35%] ml-4  h-fit bg-white p-8 rounded-2xl'>
                <div>
                    <h1 className='text-center text-3xl font-semibold'>Login</h1>
                    <hr className='mt-5 text-blue-300 p-2' />
                </div>
                <form className='flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}>


                    <div className='mt-4'>
                        <label htmlFor="email" className='block font-semibold'>Email {errors.email && <span className='text-red-500'>*</span>}</label>
                        <input type="email" placeholder='Example@gmail.com' id='email'
                            className=' outline mt-2 w-full p-2 rounded-lg outline-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            {...register("email", { required: true })} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="password" className='block font-semibold'>Password {errors.password && <span className='text-red-500'>*</span>}</label>
                        <input type="password" placeholder='********' id='password'
                            className=' w-full mt-2 p-2 rounded-lg outline outline-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 '
                            {...register("password", { required: true })} />
                    </div>
                    <button className='bg-green-500 p-2 rounded-xl text-xl text-white hover:bg-green-700 mt-4'>Login</button>
                </form>
                <div className='mt-6'>
                    <p>Don't have an account? <u className='text-blue-400 cursor-pointer'><NavLink to='/signup'>create a new one</NavLink></u></p>
                </div>
            </div>
            <div className='relative bottom-28'>
                <h1 className='font-edu text-4xl  '>Your Space. Your Access. Your Way.</h1>
            </div>
        </div>
    )
}

export default Login
