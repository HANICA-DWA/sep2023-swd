const fs = require('fs');
const path = require('path')

fs.readFile(path.join('accounts', 'ashlee_waters'), (err, fileContents) => {
    //Node uses a special data type (called buffer) to store the contents of a file 
    //(for performance reasons)
    //By calling toString() we can convert this type to a human readble string
    console.log(fileContents.toString());
});