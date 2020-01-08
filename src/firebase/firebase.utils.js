import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD6FpLoSpm4fTtthjNEgGVRqJX5lnvvsSM',
  authDomain: 'lipreme.firebaseapp.com',
  databaseURL: 'https://lipreme.firebaseio.com',
  projectId: 'lipreme',
  storageBucket: 'lipreme.appspot.com',
  messagingSenderId: '178753279341',
  appId: '1:178753279341:web:f80daf2a6f346ec6fb3664',
  measurementId: 'G-D7FZBVE9YY'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
