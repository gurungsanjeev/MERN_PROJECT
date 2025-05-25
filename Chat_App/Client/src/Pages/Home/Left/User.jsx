import React from 'react'
import { useState } from 'react'

const User = () => {
    const name = [
        {
            fullname: "Thor Highland",
            email: "gurungsanjeev@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Rajesh Hamal",
            email: "hamalRajesh@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Himal Kaji  ",
            email: "kaji@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Rajesh Hamal",
            email: "hamalRajesh@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Rajesh Hamal",
            email: "hamalRajesh@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Himal Kaji  ",
            email: "kaji@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Rajesh Hamal",
            email: "hamalRajesh@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Himal Kaji  ",
            email: "kaji@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Rajesh Hamal",
            email: "hamalRajesh@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Himal Kaji  ",
            email: "kaji@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Rajesh Hamal",
            email: "hamalRajesh@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
        {
            fullname: "Himal Kaji  ",
            email: "kaji@gmail.com",
            img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
        },
    ]
    return (
        <>

            <div style={{maxHeight:"calc(90vh - 10vh)"}}  className='overflow-y-auto max-h-full '>

                {name.map((user, index) => (


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
                            <h1>{user.fullname}</h1>
                            <p>{user.email}</p>
                        </div >

                    </div>

                ))}
            </div>
        </>
    )
}

export default User
