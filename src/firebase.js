// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD2W-1hOs5gAjUK955QBzcnYAO0Guov5zs",
  authDomain: "aao-bat-kare.firebaseapp.com",
  projectId: "aao-bat-kare",
  databaseUrl: "https://aao-bat-kare.firebaseio.com",
  storageBucket: "aao-bat-kare.appspot.com",
  messagingSenderId: "811431451750",
  appId: "1:811431451750:web:fc9af976f1e12356d2a1a7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

