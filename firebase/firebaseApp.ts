// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'cen4010-g04.firebaseapp.com',
  projectId: 'cen4010-g04',
  storageBucket: 'cen4010-g04.appspot.com',
  messagingSenderId: '3853357411',
  appId: '1:3853357411:web:a03654ba21ba3171dd4356',
  measurementId: 'G-GWEH6BDD6V',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
