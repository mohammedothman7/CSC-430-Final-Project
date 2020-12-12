import firebase from "firebase/app";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4C9Of7bM9kk8llxgihhV2oDvggmEGIMo",
  authDomain: "csc-430-final-project.firebaseapp.com",
  projectId: "csc-430-final-project",
  storageBucket: "csc-430-final-project.appspot.com",
  messagingSenderId: "990559277029",
  appId: "1:990559277029:web:63b7898c153655c904690c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
