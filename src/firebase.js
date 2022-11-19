import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDRqLzTT5FmOPHWL_S6XqSoM_FnpOFqyQ",
  authDomain: "todo-list-f1b2f.firebaseapp.com",
  projectId: "todo-list-f1b2f",
  storageBucket: "todo-list-f1b2f.appspot.com",
  messagingSenderId: "300509730238",
  appId: "1:300509730238:web:cafbcc90117e96030c15ef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
