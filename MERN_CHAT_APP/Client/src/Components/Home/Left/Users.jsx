import React from 'react'
import User from './User'

const Users = () => {
    return (
        <>
            <div style={{ maxHeight: 'calc(89vh - 17vh)' }} className='overflow-auto w-full'>

                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div >

        </>
    )
}

export default Users
