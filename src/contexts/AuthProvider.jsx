import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   ovserber
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("user in the auth state change", currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
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
    user,
    setLoading,
    createUser,
    logInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
