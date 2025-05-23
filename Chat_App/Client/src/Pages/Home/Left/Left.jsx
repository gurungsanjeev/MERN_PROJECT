import React from 'react'
import User from '../Right/User';
import { IoSearch } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

const Left = () => {
  return (
    <>
      <div className='left w-[30%] border border-slate-950  bg-gray-950 text-white '>


        <h1 className='text-3xl italic justify-center flex items-center mt-4 font-semibold'>Chatting</h1>
        <div className="search flex justify-center items-center mt-6">

          <input type="search" placeholder='Search' className='bg-slate-700 pl-3 py-1 rounded-xl  ml-3 text-white w-full mx-1 my-2 ' /><IoSearch className=' w-[20%] max-w-[20%]' />
        </div>
        <div className='border border-slate-700'>

        </div>
      

          
          

            <User />
          
        </div>


      



    </>
  )
}

export default Left
