import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import Login from './Components/Login/Login.jsx'
import { RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup/Singup.jsx'




const router = createBrowserRouter([
  {

    path:"/",
    element:<Home/>,
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
    }
  ]
  },
  
  {
    path:'/signup',
   element:<Signup/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
