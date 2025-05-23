import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Template from './Pages/Template'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Home from './Pages/Home/Home'
import { useAuth } from './Context/AuthProvider'

function App() {
  // object destrcting so using curly braces {}
  /// array destructing use big bracket []
  const {authUser, setAuthUser} = useAuth()
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<LandingPage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
          <Route path='home' element={authUser ? <Home /> : <Navigate to="/login" />} />

      </Routes>


      
    </>
  )
}

export default App
