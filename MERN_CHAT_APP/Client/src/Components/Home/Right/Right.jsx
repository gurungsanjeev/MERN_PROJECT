import React, { useEffect } from 'react'
import Message from './Message'
import ChatUser from './ChatUser'
import Type from './Type'
import Messages from './Messages'
import useSendMessage from '../../../Context/useSendMessage'
import useConversation from '../../../Zustand/useConversation.js'
import Loading from '../../Loading.jsx'
import { useAuth } from "../../../Context/AuthProvider.jsx"


const Right = () => {
    const { loading, sendMessage } = useSendMessage()
    // console.log("sendmessages: ", sendMessage);

    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        return setSelectedConversation(null);
    }, [setSelectedConversation])

    return (
        <>
            <div className='border-2 border-black w-[70%] max-w-[70%] bg-slate-800 text-white'>
                <div>
                    {!selectedConversation ? (<NoChatSelected />) : (<>


                        <ChatUser />
                        <div className='overflow-auto flex-scroll' style={{ maxHeight: 'calc(87vh - 13vh)' }}>

                            <Messages />
                        </div>
                        <Type />
                    </>)}
                </div>
            </div >
        </>
    )
}

export default Right


const NoChatSelected = () => {


    const { authUser, setAuthUser } = useAuth();
    console.log(authUser);
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <h1 className='text-center'>Welcome, <span className='font-semibold'>{authUser.user.name}</span>
                    <br />
                    <p>No chat selected, please start conversation by selecting anyone to your contacts</p>
                </h1>
            </div>
        </>
    )
}
