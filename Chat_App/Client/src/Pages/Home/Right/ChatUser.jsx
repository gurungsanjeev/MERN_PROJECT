import React from 'react'

const ChatUser = () => {
    return (
        <>
        <div className='p-4 flex gap-4 bg-gray-800 h-[10dvh] items-center' >

            <div className="avatar avatar-online ">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>

                    <h5 className='text-md'>Thor Highland</h5>
                    <h5 className='text-sm'>Active now</h5>
            </div>
        </div>
        </>
    )
}

export default ChatUser
