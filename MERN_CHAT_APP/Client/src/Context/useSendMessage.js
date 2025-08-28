import React from 'react'
import useConversation from '../Zustand/useConversation.js';
import { useState } from 'react';
import axios from 'axios';

const useSendMessage = () => {

    const [loading, setLoading] = useState();
    const { messages, setMessage, selectedConversation } = useConversation();

    const sendMessages = async (message) => {

        setLoading(true);
        try {
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`, { message })

            setMessage([...messages, res.data.newMessage]);


            setLoading(false);
        } catch (error) {
            console.log("Error in useSendMessage" + error);
            setLoading(false);
        }

    }

    return { loading, sendMessages }
}

export default useSendMessage;








