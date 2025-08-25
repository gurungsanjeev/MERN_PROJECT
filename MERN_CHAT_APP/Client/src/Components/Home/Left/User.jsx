import React from 'react'

const User = ({ user }) => {
    return (
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
    )
}

export default User
