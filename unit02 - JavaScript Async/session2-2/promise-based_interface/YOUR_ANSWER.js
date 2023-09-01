const fs = require('fs');

//Definitie van de promise-based interface voor readFile
function readFileP(file) {
    return new Promise((resolve, reject) => {
        /*
        
            Schrijf hier je oplossing
        
        */
    });
}

//Gebruik van de promise-based interface
readFileP('test.txt').then(value => {
    console.log(value.toString());
});