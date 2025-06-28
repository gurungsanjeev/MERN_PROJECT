import mongoose from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // ✅ Validate ObjectIds
        if (
            !mongoose.Types.ObjectId.isValid(senderId) ||
            !mongoose.Types.ObjectId.isValid(receiverId)
        ) {
            return res.status(400).json({ error: "Invalid sender or receiver ID" });
        }

        const senderObjectId = new mongoose.Types.ObjectId(senderId);
        const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

        //  Find existing conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [senderObjectId, receiverObjectId] }
        });

        //  Create new conversation if not found
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderObjectId, receiverObjectId],
                message: [] // initialize message array
            });
        }

        //  Create new message
        const newMessage = new Message({
            senderId: senderObjectId,
            receiverId: receiverObjectId,
            message
        });

        //  Link message to conversation
        conversation.message.push(newMessage._id);

        //  Save both
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({ message: "Message sent successfully", newMessage });

    } catch (error) {
        console.error("Error in sending message controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



export const getMessage = async (req, res) => {
    try {
        const { id: chatuser } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, chatuser] }
        }).populate("message");
        if (!conversation) {
            return res.status(201).json({ message: "No conversation found" })
        }
        const message = conversation.message
        res.status(201).json({ message })
    } catch (error) {
        console.log("message getting error " + error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}
