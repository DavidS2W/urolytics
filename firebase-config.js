import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA22OxP_Fz7UCLsgCIqQcARffZf2FY34aM",
  authDomain: "urolytics.firebaseapp.com",
  projectId: "urolytics",
  storageBucket: "urolytics.firebasestorage.app",
  messagingSenderId: "447688260944",
  appId: "1:447688260944:web:99b453d70769073cfa8055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);