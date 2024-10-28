// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);