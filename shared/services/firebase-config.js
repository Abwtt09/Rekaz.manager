// ============================================
// Rekaz - Firebase Configuration
// Shared between Website & Electron App
// Storage handled by Cloudinary
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, serverTimestamp, addDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABBHIi-WOjcrE2I4HCzK_T0TCPLnXb6xw",
  authDomain: "rekaz-manager.firebaseapp.com",
  projectId: "rekaz-manager",
  storageBucket: "rekaz-manager.firebasestorage.app",
  messagingSenderId: "636956045527",
  appId: "1:636956045527:web:b124bb11847d448a1f62ea",
  measurementId: "G-8TCMMQ24WL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {
  app, auth, db, googleProvider,
  // Auth
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, GoogleAuthProvider,
  // Firestore
  doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs,
  serverTimestamp, addDoc, deleteDoc, onSnapshot
};
