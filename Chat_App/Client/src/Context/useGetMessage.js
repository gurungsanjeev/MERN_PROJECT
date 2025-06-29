import React from 'react'
import { useState, useEffect } from 'react'
import useConversation from '../Statemanage/UseConversation.js'
import axios from 'axios'

const useGetMessage = () => {
    const [loading, setLoading] = useState(false)
    const { message, setMessage, selectedConversation } = useConversation();


    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const response = await axios.get(
                        `/api/message/get/${selectedConversation._id}`
                    );
                    console.log("response", response);
                    setMessage(response.data.message);
                    setLoading(false);

                } catch (error) {
                    console.log("Error in useGetMessage: " + error);
                } finally {
                    setLoading(false);
                }
            }
        }
        getMessage();
    }, [selectedConversation, setMessage])

    return {
        message,
        loading




    }
}

export default useGetMessage
