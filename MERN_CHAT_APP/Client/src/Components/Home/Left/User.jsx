import React from 'react'
import useConversation from '../../../Zustand/useConversation'

const User = ({ user }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id
    return (
        <>
            <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} onClick={() => setSelectedConversation(user)}>

                <div className='flex gap-4 items-center mt-4 hover:bg-slate-600 pl-2 py-2 cursor-pointer'>
                    <div className="avatar avatar-online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-m font-semibold'>{user.name}</h1>
                        <p className='text-sm'>{user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
