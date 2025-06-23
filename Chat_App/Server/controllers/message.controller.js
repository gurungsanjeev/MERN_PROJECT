import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    /// console.log("message sent", req.params.id, req.body.message);
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const { id: senderId } = req.user._id;  // curent logged in user

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [{ senderId, receiverId, message }]
            });
            const newMessage = new Message({
                senderId,
                receiverId,
                message,s

            })
        }

    } catch (error) {
        console.log("error in sending message controller: " + error)
        res.status(500).json({ message: "Internal server error" })
    }
}