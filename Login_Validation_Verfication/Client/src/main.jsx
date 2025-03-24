import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createBrowserRouter([
  {
  path:'/',
  element:<App/>
},
{
  path:'/signup',
  element:<Signup/>
},
{
  path:'/login',
  element:<App/>
},
{
  path:'/home',
  element:<Home/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="533764896531-uujudcoi87knmufkvcvsod8ncqqqeajf.apps.googleusercontent.com">
    {/* <App /> */}
    <RouterProvider router={router}/>
      </GoogleOAuthProvider>;
  </StrictMode>,
)
