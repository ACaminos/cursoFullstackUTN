import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDhLx9i-8JxoEwhnYKED7FXKsUrjvwEuVo",
    authDomain: "tothemoon-a8b96.firebaseapp.com",
    projectId: "tothemoon-a8b96",
    storageBucket: "tothemoon-a8b96.appspot.com",
    messagingSenderId: "285013860911",
    appId: "1:285013860911:web:1d340b70e2fcf56ca05cda",
    measurementId: "G-XRXP2M5ESQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.db = firebase.firestore();
  firebase.auth = firebase.auth();

export default firebase