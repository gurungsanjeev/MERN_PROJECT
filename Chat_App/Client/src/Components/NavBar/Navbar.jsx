import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav className='bg-indigo-500 text-white flex justify-between px-14 h-16 items-center'>
                <div >
                    <h1 className='text-2xl font-semibold'>Guff Gaff</h1>
                </div>
                <ul className='space-x-6'>
                    <button className='bg-white px-6 py-1.5 rounded-xl text-indigo-500 font-semibold'>Login</button>
                    <button className='border px-6 py-1.5 rounded-xl font-semibold'>Signup</button>
                </ul>
            </nav>


        </>
    )
}

export default Navbar
