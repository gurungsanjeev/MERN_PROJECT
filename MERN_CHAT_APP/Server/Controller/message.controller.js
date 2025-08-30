import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../Socket/server.js";
import { io } from "../Socket/server.js";

export const sendMessage = async (req, res) => {
    // console.log("message sent", req.params.id, req.body.message);
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.User._id; /// current logined user

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]); // run parallel
        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res
            .status(201)
            .json({
                message: "Message sent Successfully", newMessage
            })


    } catch (error) {
        console.log("error message controller " + error);
        res.status(500).json({ error: "internal server error" });

    }
}


export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const senderId = req.User._id; /// current logined user

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, chatUser] }
        }).populate("messages");
        if (!conversation) {
            return res.status(201).json([]);
        }

        const messages = conversation.messages;
        res.status(201).json(messages);

    } catch (error) {
        console.log("error message controller " + error);
        res.status(500).json({ error: "internal server error" });

    }
}