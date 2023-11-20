"use client";

import app from "@/config/firebaseConfig";
import AuthContext from "@/context/AuthContext";
import { saveUser } from "@/utils/api/user";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const registerUser = async (email, password, displayName, reset) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential && userCredential.user) {
        setUser({
          ...userCredential.user,
          email,
          displayName,
        });

        await updateProfile(userCredential.user, {
          displayName,
        });

        const data = {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
        };

        reset();
        router.push("/");
        saveUser(data);
        console.log(userCredential.user);
        toast.success("User registered successfully");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("User registration failed");
    }
  };

  const loginUser = async (email, password, reset) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      reset();
      router.push("/");
      console.log(userCredential.user);
      toast.success("User login successfully");
    } catch (error) {
      console.error(error.message);
      toast.error("User login failed");
    }
  };

  const googleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);

      const data = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
      };
      saveUser(data);
      router.push("/");
      console.log(userCredential.user);
      toast.success("Google signed in successfully");
    } catch (error) {
      toast.error("Google sign in failed");
      console.error(error.message);
    }
  };

  const logout = async () => {
    setLoading(true);

    try {
      await signOut(auth);
      router.push("/");
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Sign out failed");
      console.error(error.message);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    registerUser,
    googleSignIn,
    loginUser,
    logout,
    resetPassword,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
