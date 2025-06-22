import React from 'react'
import { useState } from 'react'

const User = ({ user }) => {

    return (
        <>

            <div style={{ maxHeight: "calc(90vh - 10vh)" }} className='overflow-y-hiden max-h-full '>

                {/* {allUsers.map((user, index) => ( */}


                <div className='flex items-center bg-slate-950 gap-4 py-4 mt-1 hover:bg-slate-900 cursor-pointer'>

                    <div className="avatar avatar-online pl-4">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>

                    < div >
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div >

                </div>

                {/* ))} */}
            </div>
        </>
    )
}

export default User
