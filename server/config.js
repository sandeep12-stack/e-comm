import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCybrSxzK6XnDwZn8ySAeoXKsb3dkNzPsQ",
  authDomain: "shop-929f3.firebaseapp.com",
  projectId: "shop-929f3",
  storageBucket: "shop-929f3.firebasestorage.app",
  messagingSenderId: "779555542832",
  appId: "1:779555542832:web:720c7d4b6bd4d9c10e9af5",
  measurementId: "G-836HVJZDRX"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);