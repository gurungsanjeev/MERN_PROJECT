import React from 'react'
import User from './User'
import userGetAllUsers from '../../../Context/userGetAllUsers'

const Users = () => {
    const [allUsers, loading] = userGetAllUsers();
    console.log(allUsers);

    return (
        <>
            <div style={{ maxHeight: 'calc(89vh - 17vh)' }} className='overflow-auto w-full'>

                {allUsers.map((user, index) => {
                    return <User key={index} user={user} />
                })}
            </div >

        </>
    )
}

export default Users
