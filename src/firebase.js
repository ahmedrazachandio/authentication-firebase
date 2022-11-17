// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDf1doh6yFUIP5ZI-rVgS5xELCl4AW6Mkw",
  authDomain: "mobilezone-2b449.firebaseapp.com",
  projectId: "mobilezone-2b449",
  storageBucket: "mobilezone-2b449.appspot.com",
  messagingSenderId: "167785426587",
  appId: "1:167785426587:web:a0f4ff667136ea7f58203e",
  measurementId: "G-6W5GEKQZSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};

// email firebase ahmadraza.azt@gmail.com