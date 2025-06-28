import React from 'react'
import Message from './Message'
import useGetMessage from '../../../Context/useGetMessage'
const Messages = () => {
    const { messages, loading } = useGetMessage();
    console.log("messages: " + messages);
    return (
        <>

            <Message />
        </>
    )
}

export default Messages

