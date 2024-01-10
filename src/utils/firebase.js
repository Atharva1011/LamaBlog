// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "lamablogapp.firebaseapp.com",
  projectId: "lamablogapp",
  storageBucket: "lamablogapp.appspot.com",
  messagingSenderId: "497665625551",
  appId: "1:497665625551:web:46282a7f11c0e4143916ba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
