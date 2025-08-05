// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfaag8BieFM2VDWY4nPJ5hjXZKwqsTEd0",
  authDomain: "intern-dashboard-89df6.firebaseapp.com",
  projectId: "intern-dashboard-89df6",
  storageBucket: "intern-dashboard-89df6.appspot.com",
  messagingSenderId: "887334596948",
  appId: "1:887334596948:web:31cb9b95b2970d04de18c1",
  measurementId: "G-3VSC572RNZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
