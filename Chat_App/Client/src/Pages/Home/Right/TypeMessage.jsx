import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

import useSendMessage from '../../../Context/useSendMessage';
import { useEffect } from 'react';

const TypeMessage = () => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");




  const handleSubmit = async (e) => {
    console.log(e.target.value);
    e.preventDefault();
    // if (!message.trim()) return;

    await sendMessage(message);
    setMessage("");
  };




  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center space-x-3 justify-center h-[10dvh] bg-slate-800'>
        <div className='w-[70%]'>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type here"
            className="input rounded-xl outline-none w-full bg-slate-700 text-white"
          />
        </div>
        <button
          type="submit"
          className='h-4 w-10 flex items-center'
          disabled={loading}
        >
          <IoIosSend className={`text-3xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} />
        </button>
      </div>
    </form>
  );
};

export default TypeMessage;




// import { useState } from 'react';
// import useConversation from '../../../Statemanage/UseConversation';
// import axios from 'axios';

// const useSendMessage = () => {
//   const [loading, setLoading] = useState(false);
//   const { message, setMessages, selectedConversation } = useConversation(); // plural

//   const sendMessage = async (text) => {
//     if (!text.trim()) return;
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `/api/message/send/${selectedConversation._id}`,
//         { message: text }
//       );

//       // Update conversation instantly
//       setMessages((prev) => [...prev, response.data]);

//     } catch (error) {
//       console.log("Error in sendMessage:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loading, sendMessage };
// };

// export default useSendMessage;
