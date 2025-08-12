import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './Components/Left/Left'
import Right from './Components/Right/Right'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex max-h-screen h-screen'>

        <Left />
        <Right />
      </div>
    </>
  )
}

export default App
