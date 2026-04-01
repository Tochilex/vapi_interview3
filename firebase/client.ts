// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8ZSMJL8vM2V0pK_Hc52h_jdpxMe0Y9lk",
  authDomain: "preppilot-1be3f.firebaseapp.com",
  projectId: "preppilot-1be3f",
  storageBucket: "preppilot-1be3f.firebasestorage.app",
  messagingSenderId: "748748630211",
  appId: "1:748748630211:web:a1d85021007d7845c09a76",
  measurementId: "G-XY1V63KW1G"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);