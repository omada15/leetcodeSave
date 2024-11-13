import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWmBlPlhC83etmPAL7XG32yUAuxkj-FWw",
  authDomain: "leetcode-save.firebaseapp.com",
  databaseURL: "https://leetcode-save-default-rtdb.firebaseio.com",
  projectId: "leetcode-save",
  storageBucket: "leetcode-save.firebasestorage.app",
  messagingSenderId: "442626282192",
  appId: "1:442626282192:web:405ed2c031b5ce41e204d5",
  measurementId: "G-24QQDVHP52"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
