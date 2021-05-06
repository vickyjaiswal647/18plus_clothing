import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCivHlk6xNspNMlbJpq0seRvRZgVIYY2-g",
    authDomain: "style-clothing-ffe89.firebaseapp.com",
    databaseURL: "https://style-clothing-ffe89-default-rtdb.firebaseio.com",
    projectId: "style-clothing-ffe89",
    storageBucket: "style-clothing-ffe89.appspot.com",
    messagingSenderId: "486510304949",
    appId: "1:486510304949:web:54811537331374f41ca8fc",
    measurementId: "G-X4NY46GY8S"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch ( error ) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;