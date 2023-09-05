const fs = require('fs');

fs.readFile('_index.js', (err, data) => {
    /* Dit kan dus niet */
    return JSON.parse(data); 

    /* Maar we moeten dit doen */ 
    // const fileList = JSON.parse(data);
    
    // fs.readFile(fileList.important, (err, data) => {
    //     const fileContents = JSON.parse(data);    
    //     console.log(fileContents.data);
    // });
});