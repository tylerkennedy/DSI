import * as firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyDDgD0lJi7OZzPLbTo3dHIYEkBN7PUorA0",

  authDomain: "dsi-backend.firebaseapp.com",

  databaseURL: "https://dsi-backend-default-rtdb.firebaseio.com",

  projectId: "dsi-backend",

  storageBucket: "dsi-backend.appspot.com",

  messagingSenderId: "776300556905",

  appId: "1:776300556905:web:97061928e105067737e8f8",

  measurementId: "G-ZSMPVQSTLE"

};



// Initialize Firebase
let fireDb = firebase;
try {
  fireDb = firebase.initializeApp(firebaseConfig);
} catch (error) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(error.message)) {
    console.error("Firebase initialization error raised", error.stack);
  }
}

export default fireDb.database().ref();
export const fireAuth = fireDb.auth();
export const fireStore = fireDb.firestore();
