import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY;
import { getAuth } from "firebase/auth";
import  {getDatabase} from "firebase/database"
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "memiary-3e1d0.firebaseapp.com",
  projectId: "memiary-3e1d0",
  storageBucket: "memiary-3e1d0.appspot.com",
  messagingSenderId: "231274251137",
  appId: "1:231274251137:web:625a32ecacad1c5fcfde80",
  measurementId: "G-QXHK0PVDSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  database = getDatabase();
export const auth = getAuth(app);
export const db=getFirestore(app);
export default app;
