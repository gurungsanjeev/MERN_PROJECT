import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'



const router = createBrowserRouter([
  {
  path:"",
  element:<App/>
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
