import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAb3rTS1vQzlzGlWCjiPgs9Idb43h3JDHo",
    authDomain: "wonjae-web-project.firebaseapp.com",
    projectId: "wonjae-web-project",
    storageBucket: "wonjae-web-project.appspot.com",
    messagingSenderId: "590973897831",
    appId: "1:590973897831:web:f89199c6198978088dd8c2"
};

firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();