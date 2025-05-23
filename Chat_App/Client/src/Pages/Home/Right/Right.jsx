import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message'
import TypeMessage from './TypeMessage'

const Right = () => {
  return (
    <>
    <div className='right w-[70%] bg-slate-900 text-white border border-black   '>
        

        <ChatUser/>
        <div className='overflow-y-auto' style={{maxHeight: "calc(88dvh - 10dvh"}}>

        <Message/>
        </div>
        <TypeMessage/>
    </div>
    </>
  )
}

export default Right
