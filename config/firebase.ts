// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence, getAuth} from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzoXCer893_FZmBofKfxcjWeUtzMKTrlg",
    authDomain: "track-app-3ffb9.firebaseapp.com",
    projectId: "track-app-3ffb9",
    storageBucket: "track-app-3ffb9.firebasestorage.app",
    messagingSenderId: "822037448686",
    appId: "1:822037448686:web:a46c3e6b4321e6cf1870ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
// export const auth = getReactNativePersistence(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// })
export const auth = getAuth(app);

//db
export const firestore = getFirestore(app)