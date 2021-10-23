import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNqJUyAKK_tXyB2JK2TodHQCKT9aDGFLY",
  authDomain: "project-planner-aedd3.firebaseapp.com",
  projectId: "project-planner-aedd3",
  storageBucket: "project-planner-aedd3.appspot.com",
  messagingSenderId: "289986618310",
  appId: "1:289986618310:web:e30bd2d5d8b0f7bef6c8c7",
  measurementId: "G-V1VZH126JD"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
fbApp.firestore().settings({ timestampsInSnapshots: true })
// const analytics = getAnalytics(fbApp);

export default fbApp;