import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXV2_bKfMPsxTL5a6HxlJNAANo5HWIj3o",
  authDomain: "autonest-bfdb3.firebaseapp.com",
  projectId: "autonest-bfdb3",
  storageBucket: "autonest-bfdb3.firebasestorage.app",
  messagingSenderId: "889502527843",
  appId: "1:889502527843:web:c974d2924dfbee8b33e356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);