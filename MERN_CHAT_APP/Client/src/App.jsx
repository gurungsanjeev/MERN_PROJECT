import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './Components/Home/Left/Left'
import Right from './Components/Home/Right/Right'
import Login from './Components/Signup-Login/login'

import './App.css'
import Signup from './Components/Signup-Login/Signup'
import { useAuth } from './Context/AuthProvider'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  const { authUser, setAuthUser } = useAuth();
  console.log("app authsuer:", authUser);

  return (

    <>
      <div className='flex max-h-screen h-screen'>

        {/* <Left />
        <Right /> */}
        {/* <Login /> */}
        <Home />
        {/* <Signup /> */}
      </div>
    </>
  )
}

export default App
