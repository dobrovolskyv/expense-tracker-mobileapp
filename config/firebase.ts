// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, /*getReactNativePersistence,*/ getAuth } from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// import {
//     REACT_APP_API_KEY,
//     REACT_APP_AUTH_DOMAIN,
//     REACT_APP_PROJECT_ID,
//     REACT_APP_STORAGE_BUCKET,
//     REACT_APP_MESSAGING_SENDER_ID,
//     REACT_APP_APP_ID
// } from "@env"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_APP_ID
};
// const firebaseConfig = {
//     apiKey: REACT_APP_API_KEY,
//     authDomain: REACT_APP_AUTH_DOMAIN,
//     projectId: REACT_APP_PROJECT_ID,
//     storageBucket: REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
//     appId: REACT_APP_APP_ID
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
// export const auth = getReactNativePersistence(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// })
export const auth = getAuth(app);

//db
export const firestore = getFirestore(app)