// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9xtySiF3mj6Lx3VIBvDVHDpSK08vm62g",
    authDomain: "mundo-invertido-dayelle.firebaseapp.com",
    projectId: "mundo-invertido-dayelle",
    storageBucket: "mundo-invertido-dayelle.appspot.com",
    messagingSenderId: "726144268025",
    appId: "1:726144268025:web:701679f330c1277be79428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app