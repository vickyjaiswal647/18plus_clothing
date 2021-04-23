import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCivHlk6xNspNMlbJpq0seRvRZgVIYY2-g",
    authDomain: "style-clothing-ffe89.firebaseapp.com",
    projectId: "style-clothing-ffe89",
    storageBucket: "style-clothing-ffe89.appspot.com",
    messagingSenderId: "486510304949",
    appId: "1:486510304949:web:54811537331374f41ca8fc",
    measurementId: "G-X4NY46GY8S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;