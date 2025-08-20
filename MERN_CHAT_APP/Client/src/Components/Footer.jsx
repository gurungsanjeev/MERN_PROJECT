import React from 'react'


const Footer = () => {
    // adding the year that changes dynammically when the year changes
    const year = new Date().getFullYear();
    return (
        <>
            <div className=' h-[30vh]  bg-gradient-to-l from-yellow-300 to-yellow-600'>
                <div className='top-section'>
                    <h1> explore</h1>

                </div>
                <div className='bottom-section top-30 flex relative justify-center'>
                    <p className='text-lg text-slate-900 font-semibold'>&copy; {year} Sanjeev || All rights reserved </p>
                </div>

            </div>

        </>
    )
}

export default Footer
