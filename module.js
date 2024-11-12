import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
