import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
   const auth=getAuth(app); 
const [user,setUser]=useState(null)  
const [loading,setLoading]=useState(true)
const loginProvider=(provider)=>{
    setLoading(true)
   return signInWithPopup(auth,provider)
}

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const LogIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    
}

const emailVerify=()=>{
    return sendEmailVerification(auth.currentUser)
}

const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile)
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth);
   
}

useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        if(currentUser===null || currentUser.emailVerified){
            setUser(currentUser)
        }
        setLoading(false)
    })
    return ()=>unsubscribe();
},[])

const authInfo={user,loading,loginProvider,createUser,LogIn,emailVerify,updateUserProfile,setLoading,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;