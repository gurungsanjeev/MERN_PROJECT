import React, { useState } from 'react'
import useConversation from '../Statemanage/UseConversation.js';
import axios from 'axios';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { message, setMessage, selectedConversation } = useConversation()
    const sendMessage = async (message) => {
        setLoading(true);

        try {
            const response = await axios.post(
                `/api/message/send/${selectedConversation._id}`, { message }
            );
            console.log("response", response);
            setMessage([...message, response.data.message]);
            setLoading(false);

        } catch (error) {
            console.log("Error in send Message: " + error);
        } finally {
            setLoading(false);
        }

    }
    // sendMessage();
    return { loading, sendMessage }

}

export default useSendMessage
