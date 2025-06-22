import React from 'react'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';

const userGetAllUsers = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            try {

                const token = Cookies.get("jwt");
                const response = await axios.get('/api/user/getUserProfile', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAllUsers(response.data.filteredUsers);
                setLoading(false);
            }

            catch (error) {
                console.log("error in usegetAll Users:" + error)
            }
        }
        getUsers();
    }, [])
    return [allUsers, loading];

}

export default userGetAllUsers;
