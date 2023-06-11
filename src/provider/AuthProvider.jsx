import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect, useState } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createAccout = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }
    const logout = () => {
        return signOut(auth)
    }

    const emailVerification = (user) => {
        sendEmailVerification(user)
            .then(res => {
                console.log(res);
                alert('email verification link sent your mail check now')
            })
            .catch(er => console.error(er))
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setUser(user)
    //     })
    //     return()=> unsubscribe()
    // }, [])

    // objerv authState changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, SignIn, logout, createAccout, updateProfileInfo, emailVerification, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;