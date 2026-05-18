// Rekaz Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyABBHIi-WOjcrE2I4HCzK_T0TCPLnXb6xw",
  authDomain: "rekaz-manager.firebaseapp.com",
  projectId: "rekaz-manager",
  storageBucket: "rekaz-manager.firebasestorage.app",
  messagingSenderId: "636956045527",
  appId: "1:636956045527:web:68cc805408fc7602100092",
  measurementId: "G-8TCMMQ24WL"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const CLOUDINARY_CONFIG = {
  cloudName: 'digm4dxzx',
  uploadPreset: 'Rekaz_logos'
};

window.db = db;
window.auth = auth;
window.CLOUDINARY_CONFIG = CLOUDINARY_CONFIG;
