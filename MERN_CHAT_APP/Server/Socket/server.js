import { Server } from 'socket.io'
import http from 'http';
import express from 'express'
import { log } from 'console';


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001",
        methods: ["GET", "POST"],

    }
})

/// real time message code

export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
}





const users = {}

//used to listen events onserver side
io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId) {
        users[userId] = socket.id;
        console.log(users);
    }


    io.emit("getonline", Object.keys(users));
    // used to listen client side events emitted by server side and Client side
    socket.on("disconnect", () => {
        console.log("a user disconnect", socket.id);
        delete users[userId]
        io.emit("getOnline", Object.keys(users));

    })
})

export { app, io, server }