import { Server } from "socket.io";
import http from "http";
import express from "express";
// import { io, getReceiverSocketId } from "../SocketIO/server.js";


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // your frontend origin here
        methods: ["GET", "POST"],
    },
});

const users = {};

// Export function to get socket ID by userId
export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
};

io.on("connection", (socket) => {
    console.log("New Client connected:", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId) {
        users[userId] = socket.id;
        socket.userId = userId; // Save userId on socket object for later reference
        console.log("Current users:", users);
    }

    io.emit("getonline", Object.keys(users));

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
        if (socket.userId) {
            delete users[socket.userId];
            io.emit("getOnline", Object.keys(users));
        }
    });
});


export { app, io, server };
