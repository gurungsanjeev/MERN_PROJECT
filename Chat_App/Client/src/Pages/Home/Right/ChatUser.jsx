import React from 'react'
import useConversation from '../../../Statemanage/UseConversation.js'
import { useSocketContext } from '../../../Context/SocketContext.jsx';

const ChatUser = () => {
    const { selectedConversation } = useConversation();
    console.log(selectedConversation);
    const { onlineUsers } = useSocketContext();
    const getOnlineUserStatus = (userId) => {
        return onlineUsers.includes(userId) ? "Online" : "Offline"

    }


    if (!selectedConversation) {
        return (
            <div className='p-4 flex gap-4 bg-gray-800 h-[10dvh] items-center'>
                <p className='text-white'>Chatt app</p>
            </div>
        );
    }

    return (
        <>
            <div className='p-4 flex gap-4 bg-gray-800 h-[10dvh] items-center' >

                {/* <div className={`avatar avatar-${isOnline ? "online" : "offline"}`} > */}
                <div className={`avatar avatar-online`} >
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <div>

                    <h5 className='text-md'>{selectedConversation?.name || "Chat App"}</h5>
                    <h5 className='text-sm'>{getOnlineUserStatus(selectedConversation._id)}</h5>
                </div>
            </div>
        </>
    )
}

export default ChatUser
