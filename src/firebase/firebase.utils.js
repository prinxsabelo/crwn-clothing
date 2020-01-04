import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDXImABzjHcBOmSw5d_3Dn9nKnFiB27t2M",
    authDomain: "crwn-db-358c5.firebaseapp.com",
    databaseURL: "https://crwn-db-358c5.firebaseio.com",
    projectId: "crwn-db-358c5",
    storageBucket: "crwn-db-358c5.appspot.com",
    messagingSenderId: "471273859742",
    appId: "1:471273859742:web:a41ac5b52e2d334af7a98f",
    measurementId: "G-FJ9W5R6YTH"
  };
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;