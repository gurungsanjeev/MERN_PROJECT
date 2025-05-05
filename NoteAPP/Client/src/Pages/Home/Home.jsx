import React from 'react'
import Navbar from '../../Components/Navbar'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import NoteCard from '../../Components/NoteCard'

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate();


  // confirm to the user 
  const handleLogout = () => {
    const logoutConfirm = window.confirm("Are you sure you want to logout!")
    if (logoutConfirm) {
      setIsAuthenticated(false);
      localStorage.removeItem('authToken');
      navigate('/login');
    }
  }
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      {/* <NoteCard
        title="my meeting"
        date="12.12.2023"
        content="helleo"
        // ispinned={true}
        onEdit={() => { }}
        onDelete={() => { }}
        onPinNote={() => { }}
      /> */}



    </>
  )
}

export default Home
