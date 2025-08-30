import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthProvider.jsx";
import io from 'socket.io-client'
// import { Query } from 'mongoose'

const socketContext = createContext();
export const useSocketContext = () => {
    return useContext(socketContext);
}


export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { authUser, setAuthUser } = useAuth();
    const [onlineUsers, setOnlineUsers] = useState([]);


    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000/", { // backend URL

                query: {
                    userId: authUser.user._id,

                }
            })
            setSocket(socket);
            socket.on("getonline", (users) => {
                setOnlineUsers(users);
                console.log("socket disconnected");

            })
            return () => socket.close();
        }
        else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [authUser])
    return (
        <socketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </socketContext.Provider >
    )

}