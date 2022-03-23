import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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