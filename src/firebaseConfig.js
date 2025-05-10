import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1c0FhzBSbIkHkvezpZJz-qjv_9G71s4A",
  authDomain: "appredsocial-71d94.firebaseapp.com",
  projectId: "appredsocial-71d94",
  storageBucket: "appredsocial-71d94.firebasestorage.app",
  messagingSenderId: "903468245814",
  appId: "1:903468245814:web:a89e16b5b4fcc48fab0997",
  measurementId: "G-TN4MQLC380"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);