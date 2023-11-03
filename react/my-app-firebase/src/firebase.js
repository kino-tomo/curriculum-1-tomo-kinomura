import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhUNH-t_P3MdnD4VppZS6u-NC_ybDiesM",
  authDomain: "react-practice-99f93.firebaseapp.com",
  databaseURL: "https://react-practice-99f93-default-rtdb.firebaseio.com",
  projectId: "react-practice-99f93",
  storageBucket: "react-practice-99f93.appspot.com",
  messagingSenderId: "776038483888",
  appId: "1:776038483888:web:af79s0844511a9349da7875",
  measurementId: "G-4H7X03867Y"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);