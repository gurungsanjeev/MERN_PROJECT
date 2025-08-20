import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>

            <nav className='bg-gradient-to-l from-indigo-600 to-indigo-500 w-full text-white flex justify-between px-14 h-[10vh] items-center sticky top-0 z-100'>
                <div >
                    <h1 className='text-2xl font-semibold'>Talksy</h1>

                </div>
                <ul className='space-x-6'>
                    <Link to="/login"> <button className='bg-white px-6 py-1.5 rounded-xl text-indigo-500 font-semibold'>Login</button></Link>
                    <Link to="/signup"> <button className='border px-6 py-1.5 rounded-xl font-semibold'>Signup</button></Link>
                </ul>
            </nav>


        </>
    )
}

export default Navbar
