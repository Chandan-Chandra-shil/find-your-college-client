// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBncneyJ_QmHd6shX-zfF26slUJmdncnUQ",
  authDomain: "find-your-college-75da4.firebaseapp.com",
  projectId: "find-your-college-75da4",
  storageBucket: "find-your-college-75da4.appspot.com",
  messagingSenderId: "1028822771694",
  appId: "1:1028822771694:web:342bbe2e9e12f17ad850ff",
  measurementId: "G-BHXW162H7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;