import React, { useState } from 'react';
import User from './User';
import { IoSearch } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import userGetAllUsers from '../../../Context/userGetAllUsers.jsx';
import Users from './Users.jsx';
import useConversation from '../../../Statemanage/UseConversation.js';
import { toast } from 'react-toastify';

const Left = () => {
  const [allUsers, loading] = userGetAllUsers();
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();

  console.log({ allUsers });
  console.log("type of allUsers:", typeof allUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = allUsers.find((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <>
      <div className='left w-[30%] border border-slate-950 bg-gray-950 text-white'>
        <h1 className='text-3xl italic justify-center flex items-center mt-4 font-semibold'>
          Chatting
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="search flex justify-center items-center mt-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
              className='bg-slate-700 pl-3 py-1 rounded-xl ml-3 text-white w-full mx-1 my-2'
            />
            <IoSearch className='w-[20%] max-w-[20%]' />
          </div>
        </form>

        <div className='border border-slate-700'></div>

        <Users />
      </div>
    </>
  );
};

export default Left;
