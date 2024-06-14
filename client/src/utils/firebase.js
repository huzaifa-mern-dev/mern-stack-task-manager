// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-5a58c.firebaseapp.com",
  projectId: "task-manager-5a58c",
  storageBucket: "task-manager-5a58c.appspot.com",
  messagingSenderId: "966086999067",
  appId: "1:966086999067:web:38bb85eff8c0b85f67ccbe",
  measurementId: "G-2FXFF6BJ0V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);