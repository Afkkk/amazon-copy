import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDr6b6kaGnYyG6myd04kpzAyutF4GWEFA8",
  authDomain: "clone-by-affk.firebaseapp.com",
  databaseURL: "https://clone-by-affk.firebaseio.com",
  projectId: "clone-by-affk",
  storageBucket: "clone-by-affk.appspot.com",
  messagingSenderId: "905532903769",
  appId: "1:905532903769:web:c8b6e60a59c75b1e0cbc48",
  measurementId: "G-ZCB57YPPN2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};