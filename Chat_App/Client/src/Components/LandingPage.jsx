import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className="land bg-[url('/images/land-image.jpg')] bg-cover bg-center h-[100dvh] w-full ">
                <h1 className="text-5xl md:text-6xl justify-center max-w-[50%]  pt-20 flex flex-col font-bold text-white text-left ml-4 leading-tight drop-shadow-lg ">
                    <span className='ml-10'>Connect Instantly.</span> 
                    <span className='ml-14'>Chat Freely.</span>
                    
                    <span className='ml-25'>   Anywhere.</span>
                </h1>
                <div className='mt-20 space-x-6'>
                    <button className='bg-white text-black font-semibold px-10 rounded-xl ml-20 py-1.5'>Login</button>
                    <button className='border border-white text-white font-semibold px-10 rounded-xl  py-1.5'>Sign up</button>
                </div>
            </div>


        </>
    )
}

export default LandingPage
