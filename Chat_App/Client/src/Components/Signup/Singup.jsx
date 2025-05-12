import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    const notify = () => {
        toast("Register successfully!");
        console.log("button clicked")
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "");

    // Validate password and confirm password match
    const validatePassword = (value) => {
        return value === password || "Password and confirm password don't match";
    };

    // Handle form submission
    const onSubmit = (data) => {
        const userInfo = {
            name: data.name, // Match name from form input field
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        };
        console.log(userInfo);

        // Make an API request
        axios.post("http://localhost:5003/user/signup", userInfo)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    alert("Signup successfully! You can now login")
                    notify();
                    setTimeout(() => {
                        navigate('/login'); // navigate after short delay
                    }, 2000);


                }
                localStorage.setItem("messanger", JSON.stringify(response.data))
            })
            .catch((err) => {

                if (err.response) {
                    if (err.response.status === 409) {
                        alert("email Already exist, please login in")
                        navigate('/login')
                    }
                    else if (err.response.status === 400) {
                        alert("Passwords do not match.");
                    }
                    console.log("Error in axios", err);
                }
            });
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
                                name="name" // Match the name with 'register'
                                placeholder="Full Name"
                                {...register("name", { required: "Full Name is required" })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        <br />

                        <label htmlFor="Email">Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                {...register("email", { required: "Email is required" })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        <br />

                        <label htmlFor="Password">Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        <br />

                        <label htmlFor="Confirm Password">Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: validatePassword,
                                })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        <br />

                        <button
                            type="submit"

                            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
