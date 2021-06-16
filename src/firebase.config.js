import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJSRQNFupRHzt95G2R-XRAp-Twf4FZMuA",
    authDomain: "my-coffeeshop-5db03.firebaseapp.com",
    databaseURL: "https://my-coffeeshop-5db03-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-coffeeshop-5db03",
    storageBucket: "my-coffeeshop-5db03.appspot.com",
    messagingSenderId: "427853098002",
    appId: "1:427853098002:web:0b29111f14312eebb7bccb"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.auth(); 

export const db = firebase.firestore();

export default firebase;