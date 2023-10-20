// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOc6LnQLemTuLCzBzkOWOZlkBo2awmL6A",
  authDomain: "assignment10-project-7dba2.firebaseapp.com",
  projectId: "assignment10-project-7dba2",
  storageBucket: "assignment10-project-7dba2.appspot.com",
  messagingSenderId: "67095419404",
  appId: "1:67095419404:web:f1d99fb8249e58348e2c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;