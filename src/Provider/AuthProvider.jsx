import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.Config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const createUser = (email, password) => {
   setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
 };
 const logIn = (email, password) => {
   setLoading(true);
   return signInWithEmailAndPassword(auth, email, password);
 };
 const googleProvider = new GoogleAuthProvider();
 const googleLogIn = () => {
   setLoading(true);
   return signInWithPopup(auth, googleProvider);
 };

 const logOut = () => {
   setLoading(true);
   return signOut(auth);
  };
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth,email)
  }
  
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
       setLoading(false);

       return () => {
         return unsubscribe();
       };
     });
   }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    googleLogIn,
    loading,
    resetPassword
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;