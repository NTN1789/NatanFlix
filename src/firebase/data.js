
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOuURKJXM83E4dnLSHktyIJwpkWF1a-Q",
  authDomain: "auth-887f0.firebaseapp.com",
  projectId: "auth-887f0",
  storageBucket: "auth-887f0.appspot.com",
  messagingSenderId: "387474829650",
  appId: "1:387474829650:web:6c07ec5b4b70d7afde8a8b"
};

// Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const db = getFirestore(app);


  export {   db }


 