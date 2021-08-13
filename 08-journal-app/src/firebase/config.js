import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAsmLwiCrutKtneiixSIcFVPXD3yFhrK1w",
authDomain: "react-app-udemy-course-f0df1.firebaseapp.com",
projectId: "react-app-udemy-course-f0df1",
storageBucket: "react-app-udemy-course-f0df1.appspot.com",
messagingSenderId: "274778827088",
appId: "1:274778827088:web:75d05efe28932bdfe2e455"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}