// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9moYQZPYFEqgwINPKlxCnO7KEb8cMJrM",
  authDomain: "landing-page-gsap.firebaseapp.com",
  projectId: "landing-page-gsap",
  storageBucket: "landing-page-gsap.appspot.com",
  messagingSenderId: "443370461328",
  appId: "1:443370461328:web:3c4ea909afa992ff02a015",
  measurementId: "G-XRZKBBXP0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
