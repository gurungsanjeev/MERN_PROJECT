import React from 'react'
import HomeRight from './Right/Right'
import HomeLeft from './Left/Left'
import Logout from './Right/Logout'

const Home = () => {
  return (
    <>
      <div className='flex w-ful gap-0 h-[100dvh] '>
        <Logout />
        <HomeLeft />
        <HomeRight />
      </div>

    </>
  )
}

export default Home
