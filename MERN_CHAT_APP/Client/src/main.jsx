import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './Context/AuthProvider.jsx'
import './index.css'
import App from './App.jsx'
import { SocketProvider } from './Context/socketContext.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Login from './Components/Signup-Login/login.jsx'
// import Signup from './Components/Signup-Login/Signup.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   }, {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   }
// ])



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>

      {/* <RouterProvider router={router} /> */}
      <SocketProvider>

        <App />
      </SocketProvider>

    </AuthProvider>
  </BrowserRouter>
)
