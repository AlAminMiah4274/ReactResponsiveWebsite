import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // show google login pop up
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // user logout
    const logOut = () => {
        return signOut(auth);
    };

    // user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user login
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = { user, providerLogin, logOut, createUser, userSignIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;