import mongoose from "mongoose";
import Message from "../models/message.model.js"
import User from '../models/user.models.js';


const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,  // user is the model
    },
    ],
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Message,
            default: [],

        }
    ]
}, {
    timestamps: true
}
);
const Conversation = mongoose.model("conversation", conversationSchema);
export default Conversation;