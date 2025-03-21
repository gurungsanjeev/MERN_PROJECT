import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      // .then(alert(`Welcome ${name}` ))
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          alert("password didn't match");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Login Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Login
            </button>
            <label htmlFor="text">Don't have an account!</label>
          </form>
          <NavLink to="/signup">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </NavLink>
          <div className="social-login justify-center content-center align-bottom">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const user = jwtDecode(credentialResponse.credential);
                console.log("google user: " , user);

                  // Store user info (optional)
              localStorage.setItem("user", JSON.stringify(user));

              // Redirect to homepage after login
              navigate("/home");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              
            />
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default Login;
