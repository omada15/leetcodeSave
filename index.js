let fb = document.createElement("script");
fb.src = "https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js";
document.body.appendChild(fb);
let fbs = document.createElement("script");
fbs.src = "https://www.gstatic.com/firebasejs/7.2.2/firebase-database.js";
document.body.appendChild(fbs);

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
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let id = 16216695;
let func = prompt("Which function:\n  [1] get \n  [2] write")
let prob = prompt("problem #:");
let lang = prompt("language  (cpp, csharp, python):");
let _data, _data_sn, _time, _time_sn, send, dbr;
if (func = 2){
   _data = localStorage.getItem(`${prob}_${id}_${lang}`)
   _data_sn = `${prob}_${id}_${lang}`
   _time = localStorage.getItem(`${prob}_${id}_${lang}-updated-time`)
   _time_sn = `${prob}_${id}_${lang}-updated-time`

   send = {
      data: _data,
      data_sn: _data_sn,
      time: _time,
      time_sn: _time_sn
   }
   dbr = db.ref(`data/${prob}-${lang}`)
   dbr.set(send).then(() => {
      console.log('Data sent successfully!');
   })
   .catch((error) => {
      console.error('Error sending data:', error);
   });

} else if (func = 1) {console.log("ad")}
