import React from 'react'
import userGetAllUsers from '../../../Context/userGetAllUsers'
import User from './User';

function Users(){
    const [allUsers, loading] = userGetAllUsers;
    console.log(allUsers)
  return (
    <>
<User/>
    {allUsers.map((user, index)=>
                (
                <User key={index} user={user}/>
              ))
            }
    </>
  )
}

export default Users
