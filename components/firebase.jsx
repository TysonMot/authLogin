import firebase from 'firebase';
import "firebase/database";

let config = {
    apiKey: "AIzaSyBbgrssW29ColcUnvuuyZXYVnl_3wzGKWE",
    authDomain: "realtime-fd3d1.firebaseapp.com",
    databaseURL: "https://realtime-fd3d1-default-rtdb.firebaseio.com",
    projectId: "realtime-fd3d1",
    storageBucket: "realtime-fd3d1.appspot.com",
    messagingSenderId: "734664341318",
    appId: "1:734664341318:web:a698a4caa350bf6ed7d747",
    measurementId: "G-4R1VKBXPQY"
}

firebase.initializeApp(config);
export default firebase.database();