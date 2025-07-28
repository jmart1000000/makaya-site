// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC73MHlcIcOxs-cvVczMWPfBAX_x1xKQcs",
  authDomain: "makaya-447418.firebaseapp.com",
  projectId: "makaya-447418",
  storageBucket: "makaya-447418.firebasestorage.app",
  messagingSenderId: "94456576718",
  appId: "1:94456576718:web:461fe2fae0f38826a62e9f",
  measurementId: "G-7WHWBCW17E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
