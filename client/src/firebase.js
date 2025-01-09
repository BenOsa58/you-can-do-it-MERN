import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "you-can-do-it-charity.firebaseapp.com",
  projectId: "you-can-do-it-charity",
  storageBucket: "you-can-do-it-charity.firebasestorage.app",
  messagingSenderId: "89288501154",
  appId: "1:89288501154:web:f7553260184bbaccb6f4fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
