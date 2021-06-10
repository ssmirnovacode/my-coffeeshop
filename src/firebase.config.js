/* import firebase from 'firebase';
import 'firebase/firestore'; */
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

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

/* export */ const db = firebase.firestore();

const giftset = [
  {

    "price": "6.00",
    "title": "Chai with spices",
    "image": "https://d.radikal.ru/d16/2101/11/a47b4e47661d.png",
    "content": "Chai refers to the milky black tea flavored with warm spices. Each recipe is different, but common spices to include are cinnamon, cardamom, ginger, cloves, star anise, nutmeg, pepper and coriander."
  },
  {

    "price": "7.00",
    "title": "Coffee set with a mug",
    "image": "https://cdn.shopify.com/s/files/1/0330/5793/1397/products/kitmug_1024x1024@2x.jpg?v=1584659008",
    "content": "Two packs of great arabica coffee and a hand-made mug. "
  },
  {

    "price": "8.00",
    "title": "Six pack",
    "image": "https://cdn.shopify.com/s/files/1/0009/3841/0044/products/allDripBag_noOrganic.jpg?v=1596651560",
    "content": "Six packs of excellent coffee beans: Arabica, Robusta, Liberica, Excelsa and their exotic combinations."
  }
];

giftset.forEach(function(obj) {
  db.collection("giftset").add({
      title: obj.title,
      image: obj.image,
      content: obj.content,
      price: obj.price
  }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
});


//export default firebase;