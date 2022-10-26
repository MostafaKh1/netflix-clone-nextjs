// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHklycCvZWL5hOnmPRx0ThpEqmqQTtng4",
  authDomain: "netflix-clone-c3cb4.firebaseapp.com",
  projectId: "netflix-clone-c3cb4",
  storageBucket: "netflix-clone-c3cb4.appspot.com",
  messagingSenderId: "272099513541",
  appId: "1:272099513541:web:8f9dceb13ea730eea50cac",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
