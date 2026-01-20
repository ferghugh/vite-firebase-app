
// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6yNao9RIIc-gZqAAE3UY1L0_Lx8iCJ3s",
  authDomain: "vite-firebase-app-22c97.firebaseapp.com",
  projectId: "vite-firebase-app-22c97",
  storageBucket: "vite-firebase-app-22c97.firebasestorage.app",
  messagingSenderId: "968796498223",
  appId: "1:968796498223:web:27580b244ffb73bc7719da",
  measurementId: "G-D5KC01JHP8"
};

const app = initializeApp(firebaseConfig);

// 🔥 These must come AFTER initializeApp
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Analytics can come after too
const analytics = getAnalytics(app);

export default app;
