import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,  /// taking mongoose user ID
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId, /// taking mongoose user ID
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true,
            maxlength: 1000,
            trim: true,
            validate: [
                {
                    validator: (value) => value.length > 0,
                    message: "Message canno be empty",
                },
            ],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
