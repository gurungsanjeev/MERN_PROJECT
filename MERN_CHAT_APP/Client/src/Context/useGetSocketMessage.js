import React from 'react'
import { useSocketContext } from './socketContext.jsx'
import useConversation from '../Zustand/useConversation.js';
import { useEffect } from 'react';
import sound from "../assets/notification.mp3"

const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessage } = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => { // newMessage is decleared in message.controller
            const notification = new Audio(sound);
            notification.play();
            setMessage([...messages, newMessage]);

        });
        return () => socket.off("newMessage");
    }, [socket, messages, setMessage]);


}

export default useGetSocketMessage;
