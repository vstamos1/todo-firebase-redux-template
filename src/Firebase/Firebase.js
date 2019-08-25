import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_SECRET,
  authDomain: "crossplatform-todo.firebaseapp.com",
  databaseURL: "https://crossplatform-todo.firebaseio.com",
  projectId: "crossplatform-todo",
  storageBucket: "crossplatform-todo.appspot.com",
  messagingSenderId: "274720957482",
  appId: "1:274720957482:web:b47fdd973af51853"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
