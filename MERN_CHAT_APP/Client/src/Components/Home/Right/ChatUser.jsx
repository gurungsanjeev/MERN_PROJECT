import React from 'react'
import useConversation from '../../../Zustand/useConversation'

const ChatUser = () => {

    const { selectedConversation } = useConversation();
    // console.log("selected: ", selectedConversation);  checking in console
    return (
        <>

            <div className='flex gap-4 items-center bg-slate-900 h-[13vh] hover:bg-slate-800 pl-4 py-2 cursor-pointer'>
                <div className="avatar avatar-online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='text-m font-semibold'>{selectedConversation.name}</h1>
                    {/* <h1 className='text-m font-semibold'>ram</h1> */}
                    <p className='text-sm'>Online</p>
                </div>
            </div>



        </>
    )
}

export default ChatUser
