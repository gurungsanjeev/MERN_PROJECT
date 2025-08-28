import React from 'react'
import Message from './Message'
import userGetMessage from '../../../Context/useGetMessage.js'
import Loading from '../../Loading.jsx'
import { useRef, useEffect } from 'react'

const Messages = () => {
    const { loading, messages } = userGetMessage();
    console.log(messages);


    const lastMsgRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            if (lastMsgRef.current) {
                lastMsgRef.current.scrollIntoView({ behaviour: "smooth" });

            }
        }, 100);
    }, [messages])


    return (
        <>

            <div style={{ minHeight: 'calc(90vh - 25vh)' }} className='px-4 overflow-auto ' >



                {loading ? (<Loading />) : (messages.length > 0 && messages.map((msg) => {
                    return <Message key={msg._id} message={msg} />
                }))}


                {!loading && messages.length === 0 && (
                    <div>
                        <p className='mt-20 flex justify-center '>Say!👋 Hi to start the conversation</p>
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
