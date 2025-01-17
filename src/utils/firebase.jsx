// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpnpEZBLvllF9iILVXDdFIAsCOzMZReks",
  authDomain: "netflixgpt-818bc.firebaseapp.com",
  projectId: "netflixgpt-818bc",
  storageBucket: "netflixgpt-818bc.firebasestorage.app",
  messagingSenderId: "29412691848",
  appId: "1:29412691848:web:720c0fe1ee02ad283cb43d",
  measurementId: "G-G2MYW17BP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);