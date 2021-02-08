import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbMOPiWM-cGF5czFBHnQa_fr56TYu7Qhw",
    authDomain: "slack-clone-ba787.firebaseapp.com",
    projectId: "slack-clone-ba787",
    storageBucket: "slack-clone-ba787.appspot.com",
    messagingSenderId: "1008943400344",
    appId: "1:1008943400344:web:dd80ed0612c67b332997ed",
    measurementId: "G-BJPSP20ZX6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;