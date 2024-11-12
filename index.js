// add document.write(module)
const db = firebase.database();

let id = 16216695;
let func = prompt("Which function:\n  [1] get \n  [2] write")
let prob = prompt("problem #:");
let lang = prompt("language  (cpp, csharp, python):");
let _data, _data_sn, _time, _time_sn, send, dbr;
if (func = 2){
   try {
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
      dbr.set(data).then(() => {
         console.log('Data sent successfully!');
      })
      .catch((error) => {
         console.error('Error sending data:', error);
      });
   } catch {
      alert("invalid");
   }
} else if (func = 1) {console.log("ad")}
