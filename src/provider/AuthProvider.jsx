import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

export const AuthContext = createContext();

const auth = getAuth(app)

export default function AuthProvider( { children } ) {

    const [user, setUser] = useState(null)

    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign out fuction
    const userOut = () => {
      return signOut(auth);
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      });
      return () => {
        unsubscribe();
      }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        userOut,
    }
  return (
    <AuthContext value={authData}> { children } </AuthContext>
  )
}
