import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnizHNv8jZBW93t81153h7eQ4hUE3IUjY",
  authDomain: "sanketh-hotstar-clone-8c146.firebaseapp.com",
  projectId: "sanketh-hotstar-clone-8c146",
  storageBucket: "sanketh-hotstar-clone-8c146.appspot.com",
  messagingSenderId: "415472219169",
  appId: "1:415472219169:web:f70d7de440181defc09f60",
  measurementId: "G-5H2704FCX2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
