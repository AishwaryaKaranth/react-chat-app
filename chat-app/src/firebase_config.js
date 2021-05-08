import firebase from "firebase";

firebase.initializeApp({
        apiKey: "AIzaSyBBrpNgjwRO1lkrUv4KkTt6KwAZmlw0GZQ",
        authDomain: "chat-app-f974b.firebaseapp.com",
        projectId: "chat-app-f974b",
        storageBucket: "chat-app-f974b.appspot.com",
        messagingSenderId: "540095935555",
        appId: "1:540095935555:web:94abb0d8c9ab3ee62bd0f6"
    });


const db=firebase.firestore();
export {db};