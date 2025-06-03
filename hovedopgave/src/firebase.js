// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF0R2pY8Pbt-dN_zFk2e0-KiozQ8tgClM",
  authDomain: "hovedopgave-c5c39.firebaseapp.com",
  projectId: "hovedopgave-c5c39",
  storageBucket: "hovedopgave-c5c39.firebasestorage.app",
  messagingSenderId: "692133781916",
  appId: "1:692133781916:web:a63559350af82160db6859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databaseURL = "https://hovedopgave-c5c39-default-rtdb.europe-west1.firebasedatabase.app/";
const database = getDatabase(app, databaseURL);
export { database };