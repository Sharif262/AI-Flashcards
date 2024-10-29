// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOcQQu3wT7RfETuanqbtC_3C8yk14bNc0",
  authDomain: "ai-flashcards-c7aee.firebaseapp.com",
  projectId: "ai-flashcards-c7aee",
  storageBucket: "ai-flashcards-c7aee.appspot.com",
  messagingSenderId: "141614929370",
  appId: "1:141614929370:web:3ea44fb2926ae140fd9ce3",
  measurementId: "G-GEET0XM61X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Conditionally initialize Analytics
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics }; // Export Firestore (db) and Analytics
