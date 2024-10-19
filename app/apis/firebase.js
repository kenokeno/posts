import firebase from 'firebase/app'

const firebaseConfig = {
    // Your web app's Firebase configuration
    apiKey: "AIzaSyAfjSrkb2fOjNZpvdhaCs-oXpt-0h8zzW4",
    authDomain: "blog-83f90.firebaseapp.com",
    projectId: "blog-83f90",
    storageBucket: "blog-83f90.appspot.com",
    messagingSenderId: "813374676891",
    appId: "1:813374676891:web:316e02ff0048e11b7e4b3e"
  
}
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);