import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './Components/Home/Left/Left'
import Right from './Components/Home/Right/Right'
// import Login from './Components/Signup-Login/login'

import './App.css'
import Signup from './Components/Signup-Login/Signup'
import { useAuth } from './Context/AuthProvider'
import Home from './Components/Home'
import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router'
import Login from './Components/Signup-Login/Login'
import LandingPage from './Components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  const { authUser, setAuthUser } = useAuth();
  console.log("app authsuer:", authUser);

  return (

    <>

      <Routes>
        <Route path='/' element={authUser ? (<LandingPage />) : (<Home />)}
        />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={authUser ? (<LandingPage />) : <Login />} />

      </Routes>


    </>
  )
}

export default App
