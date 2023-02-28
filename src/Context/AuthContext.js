import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);

export const AuthenticationContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googleProviderLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInformation = {
    setLoading,
    loading,
    userLogOut,
    googleProviderLogin,
    user,
  };

  return (
    <AuthenticationContext.Provider value={authInformation}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
