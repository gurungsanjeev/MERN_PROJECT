import React from "react";
import useConversation from "../../../Statemanage/UseConversation.js";
import { useSocketContext } from "../../../Context/SocketContext.jsx";

const User = ({ user }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    // console.log("isSelected", isSelected);
    const { socket, onlineUsers } = useSocketContext();
    console.log("onlineUsers", onlineUsers);

    const isOnline = onlineUsers.includes(user._id);
    console.log("isOnline", isOnline)
    console.log("user._id:", user._id);


    return (
        <>

            <div
                style={{ maxHeight: "calc(90vh - 10vh)" }}
                className="overflow-y-hidden max-h-full"
            >
                <div className={`flex items-center duration-300 ${isSelected ? "bg-slate-600" : ""} gap-4 py-4 mt-1 hover:bg-slate-600 cursor-pointer`}
                    onClick={() => setSelectedConversation(user)}>
                    <div className={`avatar avatar-${isOnline ? "online" : ""} pl-4`}>
                        <div className="w-14 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                                alt="User profile"
                            />
                        </div>
                    </div>

                    <div>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default User;
