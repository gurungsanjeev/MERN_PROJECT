import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './Context/AuthProvider.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import Login from './Components/Login/Login.jsx'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'

// import Signup from './Components/Signup/Singup.jsx'
import Signup from './Components/Signup/Signup.jsx'


import Template from './Pages/Template.jsx'




// const [authUser, setAuthUser] = useState()
// console.log(authUser)
// const router = createBrowserRouter([
//   {

//     path: "/",
//     element: <Template />,
//     children: [
//       {
//         path: '/',
//         element: <LandingPage />
//       },
//       {
//         path: '/login',
//         element: <Login />
//       },
//       {
//         path: '/signup',
//         element: <Signup />
//       },



//   {
//     path: '/home',
//     // element:  authUser?<Home/>:<Login/>

//     // },
//   ]
//   },

//   // {
//   //   path:'/signup',
//   //  element:<Signup/>
//   // }
// ])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <AuthProvider>

      {/* <RouterProvider router={router}/> */}
      <App />

    </AuthProvider>
  </BrowserRouter>

);
