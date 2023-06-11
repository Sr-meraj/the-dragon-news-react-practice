// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7jHB94OiH0gtgZ7GJ7wyddTqsshkLff4",
    authDomain: "the-dragon-news-project-638e7.firebaseapp.com",
    projectId: "the-dragon-news-project-638e7",
    storageBucket: "the-dragon-news-project-638e7.appspot.com",
    messagingSenderId: "470619418777",
    appId: "1:470619418777:web:55447488b9745298dd0808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app