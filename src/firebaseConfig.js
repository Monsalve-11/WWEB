// src/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase (cópiala exactamente desde Firebase Console)
const firebaseConfig = {
  apiKey: 'AIzaSyA1c0FhzBSbIkHkvezpZJz-qjv_9G71s4A',
  authDomain: 'appredsocial-71d94.firebaseapp.com',
  projectId: 'appredsocial-71d94',
  storageBucket: 'appredsocial-71d94.appspot.com',
  messagingSenderId: '903468245814',
  appId: '1:903468245814:web:a89e16b5b4fcc48fab0997',
  measurementId: 'G-TN4MQLC380'
};

// Evita reinicializar si ya está
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
