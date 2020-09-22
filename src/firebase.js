import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANuXfiJvENVDH8F0aQAFQpPog11_CFyXA",
  authDomain: "crud-firestore-746c6.firebaseapp.com",
  databaseURL: "https://crud-firestore-746c6.firebaseio.com",
  projectId: "crud-firestore-746c6",
  storageBucket: "crud-firestore-746c6.appspot.com",
  messagingSenderId: "965421011114",
  appId: "1:965421011114:web:876cccd019c2154a2a80d3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
