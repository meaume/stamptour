// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCab008_5-sW2vfbLsYYAaNizPtd7uu3ps",
    authDomain: "ssc-stamp.firebaseapp.com",
    projectId: "ssc-stamp",
    storageBucket: "ssc-stamp.firebasestorage.app",
    messagingSenderId: "1000269353163",
    appId: "1:1000269353163:web:1ac73e14a0d9fe86ee8b4e",
    measurementId: "G-X0T274JMM0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
