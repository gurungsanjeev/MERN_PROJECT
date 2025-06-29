import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../../Context/useSendMessage';


const TypeMessage = () => {
  const { loading, sendMessage } = useSendMessage()
  const [message, setMessage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center space-x-3 justify-center h-[10dvh] bg-slate-800 '>
          {/* <div className='flex items-center space-x-3 justify-center h-[10dvh] bg-slate-800 absolute bottom-0 '> */}
          <div className='w-[70%]'>

            <input type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type here" className="input rounded-xl outline-none w-full bg-slate-700 " />
          </div>
          <button className='h-4 w-10 flex items-center'>
            <IoIosSend className='text-3xl' />
          </button>
        </div>
      </form >
    </>
  )
}

export default TypeMessage
