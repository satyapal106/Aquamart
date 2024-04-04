import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-vUu9ncchDrYwmYY-yXgOA6ISLNkNMM4",
    authDomain: "ro-project-8c2dc.firebaseapp.com",
    projectId: "ro-project-8c2dc",
    storageBucket: "ro-project-8c2dc.appspot.com",
    messagingSenderId: "471884270246",
    appId: "1:471884270246:web:da42916fb568f8c9164267"
  };

const app =  getApp.length > 0 ? getApp(): initializeApp(firebaseConfig); 
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore,storage}