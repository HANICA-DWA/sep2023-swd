'use strict';

const readline = require('readline');
const game = require('./game');

const rl = readline.createInterface(process.stdin, process.stdout);

const COMMAND_ERROR = Symbol();

rl.setPrompt('action?> ');
rl.prompt();

rl.on('line', (line) => {
    const [command, argument] = line.trim().split(' ');
    
    //Instead of returning a value, the function execute now calls the third
    //parameter and passes in an error or a result.
    execute(command, argument, (error, result) => {
        if (error) {
            if (error.code && error.code === COMMAND_ERROR) {
                console.log(error.message);
                return rl.prompt();
            } 
            else {
                //Whenever we encounter an error we don't know how to deal with,
                //we throw it, so we can crash the program.
                throw error;
            }
            
        } 
        console.log(result);     
        return rl.prompt();
    });
}).on('close', function () {
   //DEFAULT ^c
   console.log('Leaving the game');
   process.exit(0);
});

//This function now runs asynchronous code and therefore
//it calls the function next, passing in an error or a 
//response.
function execute(command, argument, next) {
    let response;
    switch (command) {
        case 'where':
        case 'w': 
            response = 'you are in';
            const locationInformation = game.getLocationInformation();
            response += ` ${locationInformation.description}`;

            response += '\nand you can go to these location(s): '
            locationInformation.exits.forEach(exit => {
                response +=`\n- ${exit}`;
            });
            
            //Instead of returning the response, we need to call the callback parameter 
            //and pass in null (because there was no error) and the response. 
            //We need to do this even though there is no asynchronous code in this block
            return next(null, response); 
        case 'goto':
        case 'g':           
            //Here you can see how we deal with errors. Instead of throwing an 
            //error, we pass it as first argument to the callback parameter and set 
            //the result to null
            if (argument === null || argument === undefined) {
                let err = new Error(`The input '${command}' needs an argument`)
                err.code = COMMAND_ERROR;
                return next(err, null);
            }
            
            // ---------------------- PART B) -----------------------------//
            //Below is the old synchronous code, but game.goToLocation is 
            //asynchronous now. Replace this code.
            const locationDescription = game.goToLocation(argument);
            response = `you are in ${locationDescription}`;
            return response;
            // -------------------------------------------------------------//
        default:
            //Here you can see also see how we  deal with errors.
            let err = new Error(`The input: '${command}' is not defined`)
            err.code = COMMAND_ERROR;
            return next(err, null);
    }
}