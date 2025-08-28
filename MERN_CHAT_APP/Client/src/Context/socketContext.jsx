import { useState } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthProvider";
import io from 'socket.io-client'
import { Query } from "mongoose";

const socketContext = createContext();


export const socketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { authUser, setAuthUser } = useAuth()


    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000");
            query: {
                userId: authUser.user._id;

            }
        }
    }, [])

}