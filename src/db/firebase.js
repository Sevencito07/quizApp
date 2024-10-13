
import {
    doc,
    getDoc,
  } from "firebase/firestore";
  import { initializeApp } from "firebase/app";
  import {  getFirestore } from "@firebase/firestore";
  

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const getIDdata =async(id, collectionName)=>getDoc(doc(db,collectionName, id))