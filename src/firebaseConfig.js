import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqjjqtv5rALEbEzOe-OaG57g1YM3Y3bFs",
  authDomain: "ixos-shoes-and-bags.firebaseapp.com",
  projectId: "ixos-shoes-and-bags",
  storageBucket: "ixos-shoes-and-bags.firebasestorage.app",
  messagingSenderId: "495137819705",
  appId: "1:495137819705:web:a88fb75b02a1cba3f851e8",
  measurementId: "G-Q2T4SFT5Y9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
