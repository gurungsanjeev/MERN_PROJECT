import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
const Navbar = ({user, isAuthenticated, handleLogout}) => {
  return (
    <>

      <div className="nav bg-amber-200 font-semibold p-4 text-2xl flex justify-between">
        <h1>Notes</h1>
        <span>

          {isAuthenticated? (
            <div className='flex justify-between'>

              
              <h5 className='text-lg cursor-pointer' onClick={handleLogout}>Logout</h5>
            </div>)
             : null}
        </span>
      </div>
    </>
  )
}

export default Navbar
