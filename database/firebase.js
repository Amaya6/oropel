import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC5NHxqEW0Vo9d4nIW9FjbnjxZNfngdbxE",
  authDomain: "productos-997ef.firebaseapp.com",
  projectId: "productos-997ef",
  storageBucket: "productos-997ef.appspot.com",
  messagingSenderId: "1050426653259",
  appId: "1:1050426653259:web:27f57a0122ec42286bebce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
