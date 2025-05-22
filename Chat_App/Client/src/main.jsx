import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import Login from './Components/Login/Login.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'

// import Signup from './Components/Signup/Singup.jsx'
import Signup from './Components/Signup/Signup.jsx'

import {AuthProvider} from './Context/AuthProvider.jsx'
import Template from './Pages/Template.jsx'



const router = createBrowserRouter([
  {

    path:"/",
    element:<Template/>,
    children:[
      {
      path:'/',
   element:<LandingPage/>
    }, 
      {
      path:'/login',
   element:<Login/>
    }, 
    {
      path:'/signup',
     element:<Signup/>
    },
    {
      path:'/home',
     element:<App/>
    },
  ]
  },
  
  // {
  //   path:'/signup',
  //  element:<Signup/>
  // }
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>

    {/* <RouterProvider router={router}/> */}
    <Home/>
  </AuthProvider>
  
);
