import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCIxx63x0SxXUcwYdjzeHYCTpNluHCtxA",
  authDomain: "linkedin-clone-yt-d2510.firebaseapp.com",
  projectId: "linkedin-clone-yt-d2510",
  storageBucket: "linkedin-clone-yt-d2510.appspot.com",
  messagingSenderId: "627275587599",
  appId: "1:627275587599:web:85e02205c27c32a63bc37a",
};

//use this to initialise the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
