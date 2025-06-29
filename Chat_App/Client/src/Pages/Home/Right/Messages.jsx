// import React from 'react'
// import { useRef, useEffect } from 'react'
// import Message from './Message'
// import Loading from "../../../Components/Loading/Loading.jsx"
// import useGetMessage from '../../../Context/useGetMessage'
// const Messages = () => {
//     const { message, loading } = useGetMessage();
//     console.log(message);
//     console.log(loading);
//     const lastMessageRef = useRef();
//     useEffect(() => {
//         setTimeout(() => {
//             if (lastMessageRef.current) {
//                 lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
//             }
//         }, 100);
//     }, [message])

//     return (
//         <>
//             {
//                 loading ? (<Loading></Loading>) : (
//                     message.length > 0 && message.map((message) => {
//                         return <Message key={message._id} message={message} />
//                     })
//                 )
//             }

//             <div style={{ minHeight: "calc(88vh - 10vh)" }}>
//                 {!loading && message.length === 0 && (
//                     <div><p className='text-center mt-[20%]'>Say hi</p></div>
//                 )}

//             </div>
//         </>
//     )
// }

// export default Messages

import React, { useRef, useEffect } from 'react';
import Message from './Message';
import Loading from "../../../Components/Loading/Loading.jsx";
import useGetMessage from '../../../Context/useGetMessage';
import useGetSocketMessage from '../../../Context/useGetSocketMessage.jsx';

const Messages = () => {
    const { message, loading } = useGetMessage();
    useGetSocketMessage();
    console.log(message);


    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            if (lastMessageRef.current) {
                lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }, [message]);

    // ✅ Check if message is a valid array before using map
    const isArray = Array.isArray(message);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {isArray && message.length > 0 ? (
                        message.map((msg, index) => (
                            // <div key={msg._id} ref={index === message.length - 1 ? lastMessageRef : null}>
                            <div key={msg._id} ref={lastMessageRef}>
                                <Message message={msg} />
                            </div>
                        ))
                    ) : (
                        // <div className="text-center h-[78dvh] text-gray-100 justify-center flex items-center">
                        //     Say hi
                        // </div>
                        <div style={{ minHeight: "calc(88vh - 10vh)" }}>

                            <div className="text-center h-[78dvh] text-gray-100 justify-center flex items-center">
                                <h1 className='text-xl font-semibold'>Say hi 👋</h1>
                            </div>


                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Messages;
