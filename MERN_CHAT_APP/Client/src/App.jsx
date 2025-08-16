import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './Components/Home/Left/Left'
import Right from './Components/Home/Right/Right'
import Login from './Components/Signup-Login/login'

import './App.css'
import Signup from './Components/Signup-Login/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex max-h-screen h-screen'>

        {/* <Left />
        <Right /> */}
        <Login />

        {/* <Signup /> */}
      </div>
    </>
  )
}

export default App
