import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';



const router = createBrowserRouter([
  {
  path:"/",
  element:<Login/>
},
  {
  path:"/home",
  element:<Home/>
},
  {
  path:"/signup",
  element:<SignUp/>
},
  {
  path:"/login",
  element:<Login/>
},

])

const Client_Id ="928662273349-90gna8i8k0j50eha231unia1qb8nma05.apps.googleusercontent.com"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId= {Client_Id}>
    <RouterProvider router={router}/>
      </GoogleOAuthProvider>;
  </StrictMode>,
)
