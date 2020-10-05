import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "start-next.firebaseapp.com",
  databaseURL: "https://start-next.firebaseio.com",
  projectId: "start-next",
  storageBucket: "start-next.appspot.com",
  messagingSenderId: "358011114070",
  appId: "1:358011114070:web:f48891f8433dc18ee361f7"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export {db, auth};