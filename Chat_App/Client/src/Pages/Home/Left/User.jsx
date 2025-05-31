import React from 'react'
import { useState } from 'react'

const User = ({ user }) => {

    return (
        <>

            <div style={{ maxHeight: "calc(90vh - 10vh)" }} className='overflow-y-auto max-h-full '>

                {allUsers.map((user, index) => (


                    <div key={index} className='flex items-center bg-slate-950 gap-4 py-4 mt-1 hover:bg-slate-900 cursor-pointer'>

                        <div className="avatar avatar-online pl-4">
                            <div className="w-14 rounded-full">
                                <img src={user.img} />
                            </div>
                        </div>
                        {/* <div className="avatar avatar-offline">
                    <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                    </div>
                    </div> */}
                        < div >
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </div >

                    </div>

                ))}
            </div>
        </>
    )
}

export default User
