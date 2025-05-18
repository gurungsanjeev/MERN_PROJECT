import React from 'react'
import { createContext } from 'react'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { useState } from 'react'


// const AuthContext = createContext();
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const initialUserState = Cookies.get('jwt') || localStorage.getItem('TOKEN')

  /// parse the user data and storing in state
  const [authUser, setAuthUser] = useState(
    initialUserState ? initialUserState : undefined
  )
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
