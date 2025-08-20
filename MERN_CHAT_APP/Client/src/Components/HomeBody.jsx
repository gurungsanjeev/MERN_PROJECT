import React from 'react'
import { NavLink } from 'react-router'

const HomeBody = () => {
    return (
        <>
            <div className='z-10' style={{ minHeight: 'calc(100vh - 10vh)', maxHeight: 'calc(100vh - 10vh)' }} >
                <div className=' flex justify-center'>


                    <h1 className='text-6xl  w-[40%] max-w-[40%] font-edu font-semibold text-white pt-5 leading-30'>Stay Connected with  your friends and your family</h1>


                </div>
                <div className='flex justify-center mt-6'>
                    <button
                        className='px-6 py-2 
                    bg-amber-300 rounded-xl text-2xl 
                    hover:bg-amber-400 
                    border-2 border-amber-400
                    shadow-2xl
                    ease-in-out duration-300
                    transition-transform hover:scale-120  '><NavLink to='/login'> Let's Connect</NavLink></button>
                </div>
            </div>
        </>
    )
}

export default HomeBody
