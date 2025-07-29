// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Platform } from "react-native";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
// import { getReactNativePersistence } from "firebase/auth/react-native";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-diet-60da1.firebaseapp.com",
  projectId: "ai-diet-60da1",
  storageBucket: "ai-diet-60da1.firebasestorage.app",
  messagingSenderId: "407518153959",
  appId: "1:407518153959:web:4e5af6a36470874f63e642",
  measurementId: "G-6NGJXN9X7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = Platform.OS === "web" ? getAuth(app) : initializeAuth(app, {
        persistance: getReactNativePersistence(ReactNativeAsyncStorage),
      });
