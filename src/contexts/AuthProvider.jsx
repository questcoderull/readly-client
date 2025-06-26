import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   side effects
  const playSoundSuccess = () => {
    const audio = new Audio("/sound.wav");
    audio.play();
  };

  const playSoundAlert = () => {
    const audio = new Audio("/nitification.mp3");
    audio.play();
  };

  const authInfo = {
    playSoundSuccess,
    playSoundAlert,
    loading,
    setLoading,
    createUser,
    logInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
