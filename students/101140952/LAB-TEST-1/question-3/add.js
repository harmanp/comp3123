const fs = require('fs')
const path = require('path')

var txtFolder = './Logs';
 
let add = function () {
   if (!fs.existsSync(txtFolder)){
       fs.mkdirSync(txtFolder);
   }
   try {
       process.chdir(txtFolder);
       
   }
   catch (err) {
       console.log('chdir: ' + err);
   }
   let data = 'some text'
   for (let i = 0; i < 10; i++) {
       fs.writeFile(`log${i}.txt`, data, function(err, data){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}

add()