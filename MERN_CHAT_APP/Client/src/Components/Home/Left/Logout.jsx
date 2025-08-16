import React from 'react'
import { TbLogout2 } from "react-icons/tb";


const Logout = () => {
    return (
        <div className='text-white w-[15%] max-w-[15%] bg-slate-800 '>
            <i> <h5 className='absolute bottom-14'>Logout</h5></i>
            <TbLogout2 className='text-4xl absolute bottom-2 transition-transform  hover:scale-120 ease-in-out  ' />
        </div>
    )
}

export default Logout
