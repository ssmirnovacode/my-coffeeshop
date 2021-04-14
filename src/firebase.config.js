import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJSRQNFupRHzt95G2R-XRAp-Twf4FZMuA",
  authDomain: "my-coffeeshop-5db03.firebaseapp.com",
  projectId: "my-coffeeshop-5db03",
  storageBucket: "my-coffeeshop-5db03.appspot.com",
  messagingSenderId: "427853098002",
  appId: "1:427853098002:web:0b29111f14312eebb7bccb"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;