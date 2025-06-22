import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useAuth } from "../../Context/AuthProvider";


const Signup = () => {
    const [authUser, setAuthUser] = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password", "")
    const confirmpassword = watch("confirmPassword", "")

    const passwordMatch = (value) => {

        return value === password || "password doesn't match"
    }
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmpassword: data.confirmPassword
        }


        async function signupData() {
            const url = "/api/user/signup"
            try {
                const response = await axios.post(url, userInfo);
                console.log(response.data);
                if (response.data) {
                    alert("Signup successfully");
                }
                localStorage.setItem("Messanger", JSON.stringify(response.data))
                setAuthUser(response.data)
            }
            catch (err) {
                alert("Error in posting data: " + err);
                console.log("error in posting data : " + err.message)
            }

        }
        signupData();




    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen bg-[url('/images/land-image.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Create an Account
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <label htmlFor="Full Name">
                            Full Name <span className="text-red-500">*</span>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </label>
                        {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        <br />
                        <label htmlFor="Email" className="mt-4">
                            Email: <span className="text-red-500">*</span>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="example@.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        <br />

                        <label htmlFor="Password" className="mt-4">
                            Password: <span className="text-red-500">*</span>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>

                        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        <br />
                        <label htmlFor="Confirm Password" className="mt-4">
                            Confirm Password: <span className="text-red-500">*</span>
                            <input
                                {...register("confirmPassword", { required: true, validate: passwordMatch })}
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        {errors.confirmPassword && (<span className="text-red-500">{errors.confirmPassword.message}</span>)}
                        <br />

                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
