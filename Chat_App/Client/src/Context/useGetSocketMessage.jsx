import React, { useEffect } from 'react';
import { useSocketContext } from './SocketContext.jsx';
import useConversation from '../Statemanage/UseConversation.js';
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { message, setMessage } = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            const notification = new Audio(sound);
            notification.play();
            setMessage([...message, newMessage]);
        });

        return () => {
            socket.off("newMessage");
        };
    }, [socket, message, setMessage]);
};

export default useGetSocketMessage;
