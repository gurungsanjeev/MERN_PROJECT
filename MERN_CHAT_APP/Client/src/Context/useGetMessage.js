import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useConversation from '../Zustand/useConversation.js';

const userGetMessage = () => {
    const [loading, setLoading] = useState();
    const { messages, setMessage, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const res = await axios.get(`/api/message/get/${selectedConversation._id}`)
                    setMessage(res.data);
                    setLoading(false);
                } catch (error) {
                    console.log("Error in userGetMessage" + error);
                    setLoading(false);
                }
            }
        }
        getMessage();
    }, [selectedConversation, setMessage])

    return { loading, messages };
}

export default userGetMessage
