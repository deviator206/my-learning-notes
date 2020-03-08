import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpuhauvJ6LU1K5YmVlH0OF3vTLKutZK9g",
    authDomain: "deviator-learnings.firebaseapp.com",
    databaseURL: "https://deviator-learnings.firebaseio.com",
    projectId: "deviator-learnings",
    storageBucket: "deviator-learnings.appspot.com",
    messagingSenderId: "337817780701",
    appId: "1:337817780701:web:fc02eb75d5c2a708437634",
    measurementId: "G-6V2080RRX8"
  }
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export default firebase;