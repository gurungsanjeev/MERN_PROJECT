// import React, { useState } from 'react'
// import useConversation from '../Statemanage/UseConversation.js';
// import axios from 'axios';

// const useSendMessage = () => {
//     const [loading, setLoading] = useState(false);
//     const { message, setMessage, selectedConversation } = useConversation();

//     const sendMessage = async (message) => {

//         setLoading(true);

//         try {
//             const response = await axios.post(
//                 `/api/message/send/${selectedConversation._id}`, { message }
//             );
//             console.log("response", response);
//             setMessage([...message, response.data]);
//             setLoading(false);

//         } catch (error) {
//             console.log("Error in send Message: " + error);
//         } finally {
//             setLoading(false);
//         }

//     }


//     return { loading, sendMessage }

// }

// export default useSendMessage





import React, { useState } from 'react'
import useConversation from '../Statemanage/UseConversation.js';
import axios from 'axios';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation(); // use plural

    const sendMessage = async (text) => {
        if (!text.trim()) return;
        setLoading(true);

        try {
            const response = await axios.post(
                `/api/message/send/${selectedConversation._id}`,
                { message: text }
            );

            // update local messages array instantly
            setMessages((prev) => [...prev, response.data]);

        } catch (error) {
            console.log("Error in sendMessage:", error);
        } finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage };
}

export default useSendMessage;
