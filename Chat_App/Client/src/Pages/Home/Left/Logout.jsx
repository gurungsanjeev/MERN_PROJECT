import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Logout = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const handleLogout = async () => {
        setLoading(true);
        try {
            const res = await axios.post("/api/user/logout")
            localStorage.removeItem("Messanger")
            Cookies.remove('jwt');
            setLoading(false);
            toast.success("Logout Successfully")
            navigate('/login')


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='w-[5%] bg-slate-900 text-white flex flex-col justify-end items-center' >
                <h5 className='italic'>Logout</h5>
                <BiLogOut className='hover:bg-slate-600 rounded-lg m-4 h-12 w-8 ' onClick={handleLogout} />
            </div>

        </>
    )
}

export default Logout
