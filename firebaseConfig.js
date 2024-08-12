// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzoG183JQS9K2PliZQSe2NnteyVr4NQg8",
  authDomain: "mywedding-144c2.firebaseapp.com",
  projectId: "mywedding-144c2",
  storageBucket: "mywedding-144c2.appspot.com",
  messagingSenderId: "130439074303",
  appId: "1:130439074303:web:886d6e41e9585f0d2f57ca",
  measurementId: "G-G3VBM8S9EY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, db, auth };