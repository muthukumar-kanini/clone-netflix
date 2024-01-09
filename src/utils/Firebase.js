// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9sFOYaszsj8T-1XdsS2qxe6bBGs0JgKA",
  authDomain: "netflix-7e463.firebaseapp.com",
  projectId: "netflix-7e463",
  storageBucket: "netflix-7e463.appspot.com",
  messagingSenderId: "865605423820",
  appId: "1:865605423820:web:27c081c589f73f0983e869",
  measurementId: "G-5KV7Z0L6EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();