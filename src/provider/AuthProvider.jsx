import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider( { children } ) {
    const [user, setUser] = useState({
        name: "Lizan Sarkar",
        email: "lizansarkar16@gmail.com"
    })
    const authData = {
        user,
        setUser,
    }
  return (
    <AuthContext value={authData}> { children } </AuthContext>
  )
}
