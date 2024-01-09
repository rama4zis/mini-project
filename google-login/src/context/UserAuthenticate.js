'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"

import {auth} from "../firebase"

// create the context 
const AuthContext = createContext({})

// create the Provider
export const AuthContextProvide = ({children}) => {
    // store user object 
    const [user, setUser] = useState(null)

    // Logout 
    function logOut() {
        return signOut(auth)
    }

    // google sign in 
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    // subcribe to auth changes 
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        })

        return () => {
            unsubcribe()
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{ user, googleSignIn, logOut  }}
        >
            {children}
        </AuthContext.Provider>
    )
}

// create the custom hook 
export const useAuthContext = () => useContext(AuthContext)