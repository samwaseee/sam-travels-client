// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsWZSesWjqsquSMZqeQS_-vUerh6iEV7U",
  authDomain: "sam-travels-a10.firebaseapp.com",
  projectId: "sam-travels-a10",
  storageBucket: "sam-travels-a10.appspot.com",
  messagingSenderId: "923051772690",
  appId: "1:923051772690:web:8f12fdecfb72c950c001cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;