import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCFiBxgHP4QDMps44yx9cae0DKsuFrLn8M",
//   authDomain: "chat-b58bf.firebaseapp.com",
//   projectId: "chat-b58bf",
//   storageBucket: "chat-b58bf.appspot.com",
//   messagingSenderId: "663905858801",
//   appId: "1:663905858801:web:3e8aa3dcc2a7ab6599e550",
//   measurementId: "G-QFZSLL9QJQ"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCFiBxgHP4QDMps44yx9cae0DKsuFrLn8M",
  authDomain: "chat-b58bf.firebaseapp.com",
  projectId: "chat-b58bf",
  storageBucket: "chat-b58bf.appspot.com",
  messagingSenderId: "663905858801",
  appId: "1:663905858801:web:86519bb455554e5499e550",
  measurementId: "G-76Z11STH5T"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
