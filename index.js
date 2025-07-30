import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {
   
};

var firebase = initializeApp(firebaseConfig);
function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}

function write(path, data) {
   const db = getDatabase();
   set(ref(db, path), data);
}

let id = 16216695;
let _data, func, prob, lang;
alert("Finished setting up. use ctrl+alt+s to open menu");

document.addEventListener("keydown", function(e) {
   if (e.ctrlKey && e.altKey && e.key === "s") {
      func = prompt("Which function:\n  [1] get \n  [2] write");
      prob = prompt("problem #:");
      lang = prompt("language (cpp, csharp, python):");
      if (func == 2){
         _data = localStorage.getItem(`${prob}_${id}_${lang}`);
         write(`data/${prob}-${lang}`, {
            data: _data,
         });
         alert("sent");
      } else if (func == 1) {
         const dbRef = ref(getDatabase());
         get(child(dbRef, `data/${prob}-${lang}`)).then((snapshot) => {
            console.log(objToString(snapshot.val()).slice(6));
            if (snapshot.exists()) {
               localStorage.setItem(`${prob}_${id}_${lang}`, objToString(snapshot.val()).slice(6))
               localStorage.setItem(`${prob}_${id}_${lang}-update-time`, Date.now());
            } else {
               alert("No data");
            }
         });
      }
   }
});
