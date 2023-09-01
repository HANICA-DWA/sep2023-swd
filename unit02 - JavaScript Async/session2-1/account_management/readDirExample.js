const fs = require('fs');

fs.readdir('accounts', (err, fileList) => {
    console.log(fileList);
    console.log(fileList.length);
});