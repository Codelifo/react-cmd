// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUenFUkwHEKhgd9W_MpieZ0ZnJaFcxGsk",
  authDomain: "simple-firebase-58b98.firebaseapp.com",
  projectId: "simple-firebase-58b98",
  storageBucket: "simple-firebase-58b98.firebasestorage.app",
  messagingSenderId: "989978738917",
  appId: "1:989978738917:web:4b779eb13b1d24a9b5140c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;