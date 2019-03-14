var firebase = require("firebase/app");

require("firebase/firestore");
require("firebase/storage")
require("firebase/auth");

// Initialize Firebase
var config = {
    // Your config keys
  };
  firebase.initializeApp(config);
  const firestore = firebase.firestore();
  const fstore = firebase.storage();
  var sRef = fstore.ref();
 
  export const fb = firebase;
  export const db = firestore;
  export const userdb = db.collection('users');
  export const webdb = db.collection('webs');
  export const fbStore = fstore;
  export const auth = firebase.auth();
  export const storageRef = sRef;