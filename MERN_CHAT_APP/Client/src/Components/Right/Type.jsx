import React from 'react'
import { FiSend } from "react-icons/fi";

const Type = () => {
    return (
        <>
            <div className='bg-slate-900  w-full h-[12vh]'>

                <form action="">
                    <div className='flex justify-center pt-5 items-center gap-4'>


                        <input type="text"
                            className='bg-slate-700 border-none  w-lg py-1.5 text-slate-200 rounded-lg px-4'
                            placeholder='Text here' />
                        <FiSend className='text-3xl transition-transform hover:scale-120' />
                    </div>
                </form>
            </div>

        </>
    )
}

export default Type
