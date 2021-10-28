import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCUI73BlYCRcw_vejHrnAYYIVKNFikGDqM",
  authDomain: "mybuddybudget.firebaseapp.com",
  projectId: "mybuddybudget",
  storageBucket: "mybuddybudget.appspot.com",
  messagingSenderId: "585425576421",
  appId: "1:585425576421:web:c5aa87a73e7d42a70d0f0c",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
