// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG6WzwCqbN0u4ttK3kkKPHnp9MIOeHVGY",
  authDomain: "entregacoderhousereact.firebaseapp.com",
  projectId: "entregacoderhousereact",
  storageBucket: "entregacoderhousereact.appspot.com",
  messagingSenderId: "213845832995",
  appId: "1:213845832995:web:16312fd85a663353298896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db