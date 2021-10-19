import firebase from 'firebase/app';
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCoM51E-DQQkCMCSnezr-TJVUKb8gld_yE",
    authDomain: "boardapp-28ddd.firebaseapp.com",
    projectId: "boardapp-28ddd",
    storageBucket: "boardapp-28ddd.appspot.com",
    messagingSenderId: "354128593949",
    appId: "1:354128593949:web:7b35e800574a7800e332f4",
    measurementId: "G-JVDRT7M7PK"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase