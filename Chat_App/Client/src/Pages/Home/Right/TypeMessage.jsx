import React from 'react'
import { IoIosSend } from "react-icons/io";


const TypeMessage = () => {
  return (
    <>
      <div className='flex items-center space-x-3 justify-center h-[10dvh] bg-slate-800'>
        <div className='w-[70%]'>

          <input type="text" placeholder="Type here" className="input rounded-xl outline-none w-full bg-slate-700 " />
        </div>
        <button className='h-4 w-10 flex items-center'>
          <IoIosSend className='text-3xl' />
        </button>
      </div>
    </>
  )
}

export default TypeMessage
