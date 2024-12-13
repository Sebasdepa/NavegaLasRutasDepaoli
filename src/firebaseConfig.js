import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0NSJI1yA9LH9qEAKpHJXi_sVBwCJb0js",
  authDomain: "depaoli1.firebaseapp.com",
  projectId: "depaoli1",
  storageBucket: "depaoli1.firebasestorage.app",
  messagingSenderId: "12772389792",
  appId: "1:12772389792:web:ea98a7b7f05a0fd1bf2ac5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )