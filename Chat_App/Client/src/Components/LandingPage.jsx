import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup/Singup'
import Login from './Login/Login'
import Model from './Model'

const LandingPage = () => {


    const [isModelOpen , setIsModelOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
        
            <div className="land bg-[url('/images/land-image.jpg')] bg-cover bg-center h-[100dvh] w-full ">
                <h1 className="text-5xl md:text-6xl justify-center max-w-[50%]  pt-20 flex flex-col font-bold text-white text-left ml-4 leading-tight drop-shadow-lg ">
                    <span className='ml-10'>Connect Instantly.</span> 
                    <span className='ml-14'>Chat Freely.</span>
                    
                    <span className='ml-25'>   Anywhere.</span>
                </h1>
                <div className='mt-20 relative left-70'>
                  {/* <Link to ="/login">  <button className='bg-white text-black font-semibold px-10 rounded-xl ml-20 py-1.5 '>Login</button></Link>
                   <Link to="/signup"> <button className='border border-white text-white font-semibold px-10 rounded-xl  py-1.5'>Sign up</button></Link> */}
                   <button onClick={()=> setIsModelOpen(true)} className='border border-white text-white font-semibold px-10 rounded-xl relative py-1.5 '>Let's Get Started</button>
                    {/* <button className='border border-white text-white font-semibold px-10 rounded-xl  py-1.5'>Sign up</button> */}
                </div>
                <Model isModelOpenValue={isModelOpen} setIsModelOpenValue={setIsModelOpen}>
                    { isLogin? <Login/>:<Signup/>}

                    </Model>
            </div>


        </>
    )
}

export default LandingPage
