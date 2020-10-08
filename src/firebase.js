import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChNpgxHO1MzBtqwFG7EUk5A18cqRg5ePU",
  authDomain: "clone-12aa0.firebaseapp.com",
  databaseURL: "https://clone-12aa0.firebaseio.com",
  projectId: "clone-12aa0",
  storageBucket: "clone-12aa0.appspot.com",
  messagingSenderId: "907440856821",
  appId: "1:907440856821:web:b099cfa5ac19aedb81efbc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
