import React from 'react'
import { IoSearch } from "react-icons/io5";

const Left = () => {
  return (
 <>
 <div className='left w-[30%] border border-white bg-gray-950 text-white '>
   <h1 className='text-3xl italic justify-center flex items-center mt-4'>Chatting</h1> 
  <div className="search flex justify-center items-center mt-6">

  <input type="search" className='bg-white w-full mx-1 my-2'  /><IoSearch className=' w-[20%] max-w-[20%]' />
  </div>
    left
 </div>
 
 </>
  )
}

export default Left
