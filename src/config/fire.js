import { initializeApp } from "firebase/app";
//import { GoogleAuthProvider, getAuth, getRedirectResult} from "firebase/auth";
require("dotenv").config();
/*
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };*/
const firebaseConfig = {
  apiKey: "AIzaSyCUI73BlYCRcw_vejHrnAYYIVKNFikGDqM",
  authDomain: "mybuddybudget.firebaseapp.com",
  projectId: "mybuddybudget",
  storageBucket: "mybuddybudget.appspot.com",
  messagingSenderId: "585425576421",
  appId: "1:585425576421:web:c5aa87a73e7d42a70d0f0c",
};
const app = initializeApp(firebaseConfig);

export default app;
