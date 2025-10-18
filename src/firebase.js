import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH6Oa8piOoIZ1RsRa4GSpNa5stmlByfQw",
  authDomain: "bucin-fff0b.firebaseapp.com",
  projectId: "bucin-fff0b",
  storageBucket: "bucin-fff0b.appspot.com",
  messagingSenderId: "280355200501",
  appId: "1:280355200501:web:e59db5685129ddf83994bc",
  measurementId: "G-KCG7Q1K325"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);