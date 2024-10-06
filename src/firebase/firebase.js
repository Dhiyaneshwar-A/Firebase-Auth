import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5htD6yz-Op7Zr_5WfZiTJBXoM2cChpBI",
  authDomain: "react-auth-5a0f1.firebaseapp.com",
  projectId: "react-auth-5a0f1",
  storageBucket: "react-auth-5a0f1.appspot.com",
  messagingSenderId: "69514812302",
  appId: "1:69514812302:web:58dac6074fbd500bd922df",
  measurementId: "G-DNE0YHFBPN"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
