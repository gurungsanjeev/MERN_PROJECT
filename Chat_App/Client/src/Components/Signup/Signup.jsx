import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider.jsx';


const Signup = () => {
const {authUser, setAuthUser} = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "");

    // Log updated authUser when it changes
    // useEffect(() => {
    //     console.log("Updated authUser:", authUser);
    // }, [authUser]);

    // Validate password and confirm password match
    const validatePassword = (value) => {
        return value === password || "Password and confirm password don't match";
    };

    // Handle form submission
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        };

    //    await axios.post('http://localhost:5003/user/signup', userInfo)
       await axios.post('/user/signup', userInfo)
        .then((response)=>{
            console.log(response.data)
            if(response.data){
                toast.success("Register Successfully")
                localStorage.setItem('TOKEN', JSON.stringify(response.data))
              
              setAuthUser(response.data)
                setTimeout(() => {
                   navigate('/login')
               }, 2000); 
            }
        })
        .catch((err)=>{
            if(err.response){
                alert("error"+ err.response.error)
            }
            console.log("Error in Axios:",err);
        })

        // console.log(userInfo)

        // try {
        //     const response = await axios.post("http://localhost:5003/user/signup", userInfo);

        //     if (response.data) {
        //         toast.success("Signup successful! Redirecting to login...");
        //         localStorage.setItem("messanger", JSON.stringify(response.data));
        //         setAuthUser(response.data);
        //         setTimeout(() => navigate('/login'), 2000);
        //     }
        // } catch (err) {
        //     if (err.response) {
        //         if (err.response.status === 409) {
        //             toast.error("Email already exists, please login.");
        //             navigate('/login');
        //         } else if (err.response.status === 400) {
        //             toast.error("Passwords do not match.");
        //         }
        //     }
        //     console.error("Error in axios", err);
        // }
    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen bg-[url('/images/land-image.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <label htmlFor="Full Name">Full Name
                            <input
                                type="text"
                                {...register("name", { required: "Full Name is required" })}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </label>
<br />
                        <label htmlFor="Email" className='mt-4' >Email:
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="example@.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </label>
                        <br />

                        <label htmlFor="Password" className='mt-4'>Password:
                            <input
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </label>
                        <br />

                        <label htmlFor="Confirm Password" className='mt-4'>Confirm Password:
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: validatePassword,
                                })}
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                        </label>
                        <br />

                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
