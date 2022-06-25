import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGRtI9DLw4-FK9mGvCZRSk8wUyQwWsoic",
  authDomain: "snkrs-world.firebaseapp.com",
  projectId: "snkrs-world",
  storageBucket: "snkrs-world.appspot.com",
  messagingSenderId: "1025925938359",
  appId: "1:1025925938359:web:45b3b3d9fa437773f0e132"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();