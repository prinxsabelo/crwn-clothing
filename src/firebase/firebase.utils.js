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
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);
  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;