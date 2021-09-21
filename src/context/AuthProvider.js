import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/fire";

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    //algo
  };
  const logout = () => {
    //algo
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
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
