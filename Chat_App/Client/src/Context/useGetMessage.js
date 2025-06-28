import React from 'react'
import { useState, useEffect } from 'react'
import useConversation from '../Statemanage/UseConversation.js'
import axios from 'axios'

const useGetMessage = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();


    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const response = await axios.get(
                        `/api/message/get/${selectedConversation._id}`
                    );
                    setMessages(response.data);
                    setLoading(false);

                } catch (error) {
                    console.log("Error in useGetMessage: " + error);
                }
            }
        }
        getMessage();
    }, [selectedConversation, setMessages])

    return {
        messages,
        loading




    }
}

export default useGetMessage
