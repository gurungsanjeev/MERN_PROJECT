import React from 'react'
import Message from './Message'
import userGetMessage from '../../../Context/useGetMessage.js'
import Loading from '../../Loading.jsx'
import { useRef, useEffect } from 'react'
import useGetSocketMessage from '../../../Context/useGetSocketMessage.js'

const Messages = () => {
    const { loading, messages } = userGetMessage();
    useGetSocketMessage(); /// listing incoming message
    console.log(messages);


    const lastMsgRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            if (lastMsgRef.current) {
                lastMsgRef.current.scrollIntoView({ behavior: "smooth" });

            }
        }, 100);
    }, [messages])


    return (
        <>

            <div style={{ minHeight: 'calc(90vh - 15vh)' }} className='px-4 overflow-auto ' >



                {loading ? (<Loading />) : (messages.length > 0 && messages.map((msg) =>
                    <div key={msg.id} ref={lastMsgRef}>
                        <Message message={msg} />

                    </div>
                ))}


                {!loading && messages.length === 0 && (
                    <div>
                        <p className='mt-20 flex justify-center text-xl '>Say!👋 Hi to start the conversation</p>
                    </div>
                )
                }

                {/* <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message /> */}



            </div>
        </>
    )
}

export default Messages
