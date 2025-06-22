import React, { createContext, useState } from 'react'
import Cookies from "js-cookie";
import { useContext } from 'react';




// creating the context
export const AuthContext = createContext()

// Auth providers component
export const AuthProvider = ({ children }) => {
  const initialUserState = Cookies.get("jwt") || localStorage.getItem("Messanger")
  const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider >

  )
}

// useAuth hook
export const useAuth = () => useContext(AuthContext)