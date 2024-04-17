// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJQWPU_KuWjph9P02wzf7tCSuhW8Yea2Q",
  authDomain: "react-ecommerce-shop-b3885.firebaseapp.com",
  projectId: "react-ecommerce-shop-b3885",
  storageBucket: "react-ecommerce-shop-b3885.appspot.com",
  messagingSenderId: "254015374166",
  appId: "1:254015374166:web:b93c7a2f5d11ae021dccf7",
  measurementId: "G-LQPXTDX32S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);