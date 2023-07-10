import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
   const auth=getAuth(app); 
const [user,setUser]=useState(null)  

const loginProvider=(provider)=>{
   return signInWithPopup(auth,provider)
}

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const LogIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    return signOut(auth);
}

useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return ()=>unsubscribe();
},[])

const authInfo={user,loginProvider,createUser,LogIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;