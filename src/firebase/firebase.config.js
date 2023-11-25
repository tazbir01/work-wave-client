// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.vite_APIKEY,
  authDomain: import.meta.env.vite_AUTHDOMAIN,
  projectId: import.meta.env.vite_PROJECTID,
  storageBucket: import.meta.env.vite_STORAGEBUCKET,
  messagingSenderId: import.meta.env.vite_MESSAGINGSENDERID,
  appId: import.meta.env.vite_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);