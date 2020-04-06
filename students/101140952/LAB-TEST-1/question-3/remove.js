const fs = require('fs')
const path = require('path')

var txtFolder = './Logs';
let remove = function() {
    fs.readdir(txtFolder, (err, files) => {
        if(err) throw err;
        for (const file of files){
            fs.unlink(path.join(txtFolder, file), err => {
                if(err) throw err;
                console.log(`delete files...${file}`)            
            }
            
            )
            
            
        }
    })
}
remove()