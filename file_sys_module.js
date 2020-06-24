// JavaScript source code
const fs = require('fs');
//creat a file
fs.writeFile('testing.txt', "I luvvvv summer time in NYC!", (err) => {
    if (err)
        console.log(err);
    else {
        console.log('File successfully create!');
        fs.readFile('testing.txt','utf8', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });
    }

  });    
    
   