import React from 'react'

const Message = ({ message }) => {

    const authUser = JSON.parse(localStorage.getItem("Messanger"));

    const itsme = message.senderId === authUser.user._id;
    console.log(itsme);

    // console.log("message", message);
    // console.log("authUser", authUser.user._id);
    // console.log("senderID", message.senderId);
    const chatName = itsme ? "chat-end" : "chat-start";
    const chatColor = itsme ? "bg-blue-500 text-white" : "bg-slate-500 text-white";

    const createdAt = new Date(message.createdAt);
    const formattedTime = createdAt.toLocaleTimeString([], {
        hour: '2-digit',
        minute: "2-digit"
    });


    return (
        <>

            <div className='my-6 mx-2 ' >
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble  ${chatColor}`}>{message.message}</div>
                    {formattedTime}
                </div>



            </div >
        </>
    )
}

export default Message





