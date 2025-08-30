import React, { useState } from 'react'
import { FiSend } from "react-icons/fi";
import useSendMessage from '../../../Context/useSendMessage.js';

const Type = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessages } = useSendMessage();


    const handleSubmit = async (e) => {
        e.preventDefault(); /// disable default refresh
        await sendMessages(message);
        setMessage("");

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='bg-slate-900  w-full h-[12vh]'>

                    <div className='flex justify-center pt-5 items-center gap-4'>


                        <input type="text"
                            className='bg-slate-700 border-none  w-lg py-1.5 text-slate-200 rounded-lg px-4'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)
                            }
                            placeholder='Text here' />
                        <FiSend className='text-3xl transition-transform hover:scale-120' onClick={handleSubmit} />
                    </div>
                </div>
            </form>

        </>
    )
}


export default Type
