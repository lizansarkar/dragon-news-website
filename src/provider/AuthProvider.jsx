import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';

export const AuthContext = createContext();

const auth = getAuth(app)

export default function AuthProvider( { children } ) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    console.log(loading, user)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in function
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out fuction
    const userOut = () => {
      return signOut(auth);
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
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
        signIn,
        loading,
        setLoading,
    }
  return (
    <AuthContext value={authData}> { children } </AuthContext>
  )
}
