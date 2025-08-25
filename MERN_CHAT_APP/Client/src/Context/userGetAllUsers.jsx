import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';


const userGetAllUsers = () => {

    const [allUsers, setAllUsers] = useState([]); // array
    const [loading, setLoading] = useState(false); // variable

    useEffect(() => {
        try {
            const getUsers = async () => {
                setLoading(true);
                try {
                    const token = Cookies.get('jwt');
                    const response = await axios.get('/api/user/getUserProfile', {
                        withCredentials: 'include',
                        headers: {
                            Authorization: `Bearer ${token}`,

                        },
                    });
                    // setAllUsers(response.data);
                    setLoading(false)


                    // Extract the array from the response

                    setAllUsers(response.data.filteredUsers || []);
                } catch (error) {
                    console.error("Error in userGetAllUsers:", error);
                    setAllUsers([]); // fallback to empty array
                }
            }
            getUsers();
        } catch (error) {
            console.log("Error in userGetAllUser" + error);

        }
    }, [])
    return [allUsers, loading];
}

export default userGetAllUsers
