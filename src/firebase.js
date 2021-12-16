import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6OI2rV-XuHIIVS5-kYur-hmha9_p3Yjk",
    authDomain: "linkedin-clone-yt-a749f.firebaseapp.com",
    projectId: "linkedin-clone-yt-a749f",
    storageBucket: "linkedin-clone-yt-a749f.appspot.com",
    messagingSenderId: "727160908931",
    appId: "1:727160908931:web:183a5b2c096347ca87bfb6",
    measurementId: "G-N0H7VHMCN1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}