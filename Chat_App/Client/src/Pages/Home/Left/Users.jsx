import React from 'react'
import userGetAllUsers from '../../../Context/userGetAllUsers'
import User from './User';

function Users() {
  const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers)
  return (
    <>
      <div style={{ maxHeight: "calc(72vh)" }} className='overflow-y-auto'>
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </>
  )
}

export default Users
