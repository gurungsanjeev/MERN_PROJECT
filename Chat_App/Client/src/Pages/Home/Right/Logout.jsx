import React from 'react'
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
    return (
        <>
            <div className='w-[5%] bg-slate-900 text-white flex flex-col justify-end items-center' >
                <h5 className='italic'>Logout</h5>
                <BiLogOut  className='hover:bg-slate-600 rounded-lg m-4 h-12 w-8 '/>
            </div>

        </>
    )
}

export default Logout
