import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';

const provider = new GoogleAuthProvider();
export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const socialSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    
    const context = {
        user,
        loading,
        registerUser,
        loginUser,
        logOutUser,
        socialSignIn,

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user =>{
            console.log('current user', user)
            setUser(user)
            setLoading(false)


            return () =>{
                unSubscribe();
            }
        })
    }, [])

    return (
       <authContext.Provider value={context}>
            {children}
       </authContext.Provider>
    );
};

export default AuthProvider;