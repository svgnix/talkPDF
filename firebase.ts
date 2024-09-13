import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIJaIB4KdxZBLLVioI4-2mdexJlvhEmbQ",
  authDomain: "talkpdf-4db07.firebaseapp.com",
  projectId: "talkpdf-4db07",
  storageBucket: "talkpdf-4db07.appspot.com",
  messagingSenderId: "87518103727",
  appId: "1:87518103727:web:032930aba0aa6a1f0d2c5a",
  measurementId: "G-PWZE7ZTXP6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
