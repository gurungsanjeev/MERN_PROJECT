import React from 'react'
import { useState } from 'react';
import userGetAllUsers from '../../../Context/userGetAllUsers';
import useConversation from '../../../Zustand/useConversation.js';
import toast from 'react-hot-toast';


const Search = () => {
    const [search, setSearch] = useState("");
    const [allUsers] = userGetAllUsers();
    const { setSelectedConversation } = useConversation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            return
        }
        const conversation = allUsers.find((user) => user.name.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        }
        else {
            toast.error("user Not found");
            setSearch("");
        }
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <div>

                    <label className="input h-9 w-full">
                        <svg className="h-[1em] opacity-50 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required
                            placeholder="Search"
                            value={search}


                            onChange={(e) => setSearch(e.target.value)}
                            className='text-black' />
                    </label>
                </div>
            </form>

        </>
    )
}

export default Search






