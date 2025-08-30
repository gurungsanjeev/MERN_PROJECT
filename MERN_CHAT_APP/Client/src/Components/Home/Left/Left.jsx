import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const Left = () => {
    return (
        <>
            <div
                className='border-2
              border-black 
              w-[30%] max-w-[30%]
               bg-gray-900 text-white px-4 '>
                <div className='Header w-full max-h-[15vh] h-[15vh]'  >
                    <div className='text-2xl flex justify-center font-semibold my-6'>

                        <HiChatBubbleLeftRight /> <h1 className=''>Talksy</h1>
                    </div>
                    <Search />
                </div>
                <hr className='my-3' />

                <div className='flex'>
                    <Logout />
                    <Users />
                </div>

            </div>
        </>
    )
}

export default Left
