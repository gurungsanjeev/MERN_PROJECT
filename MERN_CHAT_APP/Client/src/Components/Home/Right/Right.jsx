import React from 'react'
import Message from './Message'
import ChatUser from './ChatUser'
import Type from './Type'
import Messages from './Messages'

const Right = () => {
    return (
        <>
            <div className='border-2 border-black w-[70%] max-w-[70%] bg-slate-800 text-white'>


                <ChatUser />
                <div className='overflow-auto flex-scroll' style={{ maxHeight: 'calc(87vh - 13vh)' }}>

                    <Messages />
                </div>
                <Type />
            </div >
        </>
    )
}

export default Right
