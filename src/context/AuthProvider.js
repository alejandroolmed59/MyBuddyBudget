import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase/fire";

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const register = async(username, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    return updateProfile(auth.currentUser, {
      displayName: username
    })
  };
  const login = (email, password) => {
    //algo
  };
  const logout = () => {
    //algo
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      console.log("Iniciando sesion con "+JSON.stringify(user))
      setCurrentUser(user);
    });

    return observer;
  }, []);

  const authContextObj = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextObj}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
