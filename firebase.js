import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6zOOOhAo0lhdJuwKLFyFqZGK7Basx9Iw",
  authDomain: "docs-ef568.firebaseapp.com",
  projectId: "docs-ef568",
  storageBucket: "docs-ef568.appspot.com",
  messagingSenderId: "387601021198",
  appId: "1:387601021198:web:d45f255e13eddc878f7f5f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export { db };
