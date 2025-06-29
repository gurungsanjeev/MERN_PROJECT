import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Message from './Messages'
import TypeMessage from './TypeMessage'
import { useAuth } from "../../../Context/AuthProvider.jsx"
import Messages from './Messages'
// import Loading from '../../../Components/Loading/Loading'
import useConversation from '../../../Statemanage/UseConversation'

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    // return setSelectedConversation(null);

  }, [selectedConversation])
  return (
    <div className='right w-[70%] bg-slate-900 text-gray-300 border border-black   '>
      <div>


        {!selectedConversation ? (<Nochat />) : (<>



          <ChatUser />
          <div className='overflow-y-auto' style={{ maxHeight: "calc(88dvh - 10dvh)", minHeight: "calc(88dvh - 10dvh)" }}>

            <Messages />
          </div>
          <TypeMessage />


        </>)}
      </div>
    </div >


  )
}

export const Nochat = () => {
  const [authUser] = useAuth()
  return (
    <>
      <div className='h-screen flex items-center text-xl  justify-center'>

        <div>

          <h1 className='text-center font-semibold text-2xl'>Welcome <span>{authUser.user.name}</span></h1>

          <p>Select a conversation to start a chat</p>

        </div>

      </div>

    </>
  )
}
