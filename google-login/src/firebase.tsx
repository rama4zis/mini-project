// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOdmri0AMYJUoe8ZjrGhfsRLgPQOFKe_s",
    authDomain: "mini-project-ef2ac.firebaseapp.com",
    projectId: "mini-project-ef2ac",
    storageBucket: "mini-project-ef2ac.appspot.com",
    messagingSenderId: "190414405970",
    appId: "1:190414405970:web:7f7c8d5ded9fef27f5ba8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth app
export const auth = getAuth(app);