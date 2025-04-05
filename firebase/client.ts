import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP-Wv8wVE_obBhWTRwwUpsPE60QPadu-s",
  authDomain: "inter-quest.firebaseapp.com",
  projectId: "inter-quest",
  storageBucket: "inter-quest.firebasestorage.app",
  messagingSenderId: "112576422440",
  appId: "1:112576422440:web:ad8f44a76364807fa44b1d",
  measurementId: "G-YJXNJ0E5DR",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
