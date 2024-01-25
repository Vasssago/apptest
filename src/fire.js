// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARhbN9cLkYvVet07IRv3MMDzBKj4nN_qM",
  authDomain: "testing-ubt.firebaseapp.com",
  projectId: "testing-ubt",
  storageBucket: "testing-ubt.appspot.com",
  messagingSenderId: "748315599789",
  appId: "1:748315599789:web:a205ba190f1ab6f3a43724",
  measurementId: "G-88QBHZ80RJ"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);
const auth = getAuth(fire);

export default auth;