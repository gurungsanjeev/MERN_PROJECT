import React, { useState } from 'react'
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router';


const Logout = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/user/logout');
            localStorage.removeItem('token');
            Cookies.remove('jwt');
            setLoading(false);
            alert("Logout Successfully")
            navigate('/login')

        } catch (error) {
            console.log("Error in logout", error);

        }
    }

    return (
        <div className='text-white w-[15%] max-w-[15%] bg-slate-800 '>
            <i> <h5 className='absolute bottom-14'>Logout</h5></i>
            <button> <TbLogout2 className='text-4xl absolute bottom-2 transition-transform  hover:scale-120 ease-in-out  '
                onClick={handleLogout} /></button>
        </div>
    )
}

export default Logout
