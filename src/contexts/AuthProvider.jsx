import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const playSoundSuccess = () => {
    const audio = new Audio("/sound.wav");
    audio.play();
  };

  const playSoundAlert = () => {
    const audio = new Audio("/alert.wav");
    audio.play();
  };
  const authInfo = {
    playSoundSuccess,
    playSoundAlert,
    loading,
    setLoading,
    createUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
