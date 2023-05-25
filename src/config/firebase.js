import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRKoD-qCL3PRWo9JkF3HeXRhFSahuzs3o",
  authDomain: "fir-otp-821f1.firebaseapp.com",
  projectId: "fir-otp-821f1",
  storageBucket: "fir-otp-821f1.appspot.com",
  messagingSenderId: "68894707360",
  appId: "1:68894707360:web:b743ba67a7a31d8dee83c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
auth.useDeviceLanguage();

export { app, auth };