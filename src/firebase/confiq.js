import firebase from "firebase";
import 'firebase/auth' 
import 'firebase/firebase'
import'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAN6A8jvaCyDHziVMUQ0ZkMnTo9SbgtIM",
  authDomain: "fir-61ba9.firebaseapp.com",
  projectId: "fir-61ba9",
  storageBucket: "fir-61ba9.appspot.com",
  messagingSenderId: "934653453565",
  appId: "1:934653453565:web:2b5c98dacd8a7b3bfd8a94",
  measurementId: "G-ZCTQX070GX"
};

export default firebase.initializeApp(firebaseConfig)