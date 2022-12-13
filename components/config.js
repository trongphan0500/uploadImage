import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDmWIa2vQQ5cVhn8N_lS-o2BKhSHUQZo9Y",
    authDomain: "cuoikylttbdtadvance1.firebaseapp.com",
    projectId: "cuoikylttbdtadvance1",
    storageBucket: "cuoikylttbdtadvance1.appspot.com",
    messagingSenderId: "730781940455",
    appId: "1:730781940455:web:e56a276868cb5c55460042",
    measurementId: "G-7S1K892Z6N",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };
