import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "add_it",
    authDomain: "slack-clone-ba787.firebaseapp.com",
    projectId: "slack-clone-ba787",
    storageBucket: "add_it",
    messagingSenderId: "add_it",
    appId: "add_it",
    measurementId: "add_it",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
