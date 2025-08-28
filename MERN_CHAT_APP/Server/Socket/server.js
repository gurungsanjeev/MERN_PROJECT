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


//used to listen events onserver side
io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    // used to listen client side events emitted by server side and Client side
    socket.on("disconnect", () => {
        console.log("a user disconnect", socket.id);

    })
})

export { app, io, server }