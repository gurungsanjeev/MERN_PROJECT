import React from 'react'
import Cookies from "js-cookie"
import axios from "axios"
import { useState, useEffect } from 'react'


const userGetAllUsers = () => {

    //function
    const [allUsers, setAllUsers] = useState([]);
    /// variable
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUser = async() => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
              const response =  await axios.get("/api/user/getUserProfile",{
                    Credentials : "iclude",
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                });
                setAllUsers(response.data)
                setLoading(false);
            } catch (error) {
                console.log("Error in userGetAllUsers" + error);
            }
        }
        getUser()
    },

        []);

    return [allUsers, loading];
}

export default userGetAllUsers
