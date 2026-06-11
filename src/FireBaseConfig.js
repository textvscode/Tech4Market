// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqPQ8nHS9vzBnKj_7ORi27dfz8usER8gY",
  authDomain: "techmarket-e3189.firebaseapp.com",
  projectId: "techmarket-e3189",
  storageBucket: "techmarket-e3189.firebasestorage.app",
  messagingSenderId: "782794257941",
  appId: "1:782794257941:web:7dd809435f50ff01e7801c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);