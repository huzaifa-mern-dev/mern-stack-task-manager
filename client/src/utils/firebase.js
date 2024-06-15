
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-5a58c.firebaseapp.com",
  projectId: "task-manager-5a58c",
  storageBucket: "task-manager-5a58c.appspot.com",
  messagingSenderId: "966086999067",
  appId: "1:966086999067:web:38bb85eff8c0b85f67ccbe",
  measurementId: "G-2FXFF6BJ0V"
};

export const app = initializeApp(firebaseConfig);
