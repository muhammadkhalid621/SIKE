import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBxWoJSwuqFdpGNOqrRCSZBIGDcXss7sK0",
  authDomain: "sike-3d0d0.firebaseapp.com",
  projectId: "sike-3d0d0",
  storageBucket: "sike-3d0d0.appspot.com",
  messagingSenderId: "55334888737",
  appId: "1:55334888737:web:0c99992bcb24f3954f8a60",
  measurementId: "G-P5HG0GSQ8S",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
