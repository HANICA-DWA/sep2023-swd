const fs = require('fs');

fs.readFile('_index.json', (err, data) => {
    /* Dit is echt jammer, nu moeten we in de callback zelf de error handling code
    stoppnen */
    if (err) {
        console.log('Something went wrong');
        console.log(err.message);
        /* deze return is alleen bedoeld om direct uit de callback te komen 
         Op die manier hoeven we geen else te plaatsen voor het happy path */
        return; 
    }    
    
    const fileContents = JSON.parse(data);    
    console.log(fileContents.data);
});