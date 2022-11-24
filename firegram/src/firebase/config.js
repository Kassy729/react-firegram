// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARo274sYec7jk3AVA0KeNUdU8PizXyRpE",
  authDomain: "firegram-59f83.firebaseapp.com",
  projectId: "firegram-59f83",
  storageBucket: "firegram-59f83.appspot.com",
  messagingSenderId: "592656833651",
  appId: "1:592656833651:web:3229eddaf6b98f47b9de06",
  measurementId: "G-4CPNNQSMD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { storage, db };
