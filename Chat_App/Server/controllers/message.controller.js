import Conversation from "../models/conversation.model.js";
import mongoose from "mongoose";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    // console.log("message sent successfully", req.params.id, req.body.message);

    // try {
    //     const message = req.body.message
    //     console.log("console.log message: " + message);
    //     /// receiver id
    //     const { id: receiverId } = req.params
    //     console.log("console.log receiver id: " + receiverId);

    //     //sender id
    //     const senderId = req.user._id; /// current logged in user
    //     console.log("sender id" + senderId)



    //     let conversation = await Conversation.findOne({
    //         participants: { $all: [senderId, receiverId] }
    //     })
    //     if (!conversation) {
    //         conversation = await Conversation.create({
    //             participants: [senderId, receiverId],
    //         })
    //         const newMessage = new Message({
    //             senderId,
    //             receiverId,
    //             message
    //         });

    //         if (newMessage) {
    //             conversation.message.push(newMessage._id);
    //         }
    //         await Promise.all([conversation.save(), newMessage.save()])
    //         res.status(200).json({ message: "message sent successfuly", newMessage })
    //     }
    // } catch (error) {
    //     console.log("error in sendig message", error)
    //     res.status(500).json({ message: "Internal server error" })
    // }
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;  // curent logged in user


        const senderObjectId = new mongoose.Types.ObjectId(senderId);
        const receiverObjectId = new mongoose.Types.ObjectId(receiverId);




        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderObjectId, receiverObjectId]
            }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [{ senderObjectId, receiverObjectId, message }]
            });
            const newMessage = new Message({
                senderId: senderObjectId,
                receiverId: receiverObjectId,
                message,


            });
            if (newMessage) {
                conversation.message.push(newMessage._id);
            }
            await Promise.all([conversation.save(), newMessage.save()])
            res.status(201).json({ message: "message sent successfully", newMessage });
        }

    } catch (error) {
        console.log("error in sending message controller: " + error)
        res.status(500).json({ message: "Internal server error" })
    }
}