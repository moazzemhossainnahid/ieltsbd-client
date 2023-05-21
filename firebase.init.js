// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF7isYoxrQLWcxKTrZ2euHMpAL2RpsL7E",
  authDomain: "ielts-bd.firebaseapp.com",
  projectId: "ielts-bd",
  storageBucket: "ielts-bd.appspot.com",
  messagingSenderId: "806644947300",
  appId: "1:806644947300:web:c199f3a61ce96866d94271"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;