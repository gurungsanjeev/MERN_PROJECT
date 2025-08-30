import React from 'react'

const Message = ({ message }) => {

    const authUser = JSON.parse(localStorage.getItem('token'));
    const itsMe = message.senderId === authUser.user._id;

    // console.log("senderId " + message.senderId);
    // console.log("Auth user Id " + authUser.user._id);


    const chatName = itsMe ? "chat-end" : "chat-start";
    const chatColor = itsMe ? "bg-blue-600" : 'bg-slate-500';

    const createdAt = new Date(message.createdAt);
    const now = new Date();

    // Check if the message is from today
    const isToday = createdAt.toDateString() === now.toDateString();

    // Format based on whether it's today or not
    const formattedTime = isToday
        ? createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // only time
        : createdAt.toLocaleString([], { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }); // date + time

    return (
        <>
            <div >

                <div className={`chat ${chatName} my-4`}>
                    <div className={`chat-bubble text-white ${chatColor}`} >{message.message}</div>
                    <div className='chat-footer mt-1 text-xs opacity-70'>{formattedTime}</div>
                </div>






            </div >
        </>
    )
}

export default Message




