const fs= require('fs');
const path = require('path');
const dirPath= path.join(__dirname, 'imgs');
const imageNames = [];
console.log(dirPath)

fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
        imageNames.push(item);
        console.log(imageNames);
    })
})



