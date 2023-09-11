'use strict';

const readline = require('readline');
const game = require('./game');

const rl = readline.createInterface(process.stdin, process.stdout);

const COMMAND_ERROR = Symbol();

rl.setPrompt('action?> ');
rl.prompt();

rl.on('line', (line) => {
    const [command, argument] = line.trim().split(' ');
    execute(command, argument).then(result => {
        console.log(result);     
    }).catch (error => {
        if (error.code && error.code === COMMAND_ERROR) {
            console.log(error.message);
        } 
        else {
            throw error;
        }
    }).then(() => {
        rl.prompt();
    });

}).on('close', function () {
   //DEFAULT ^c
   console.log('Leaving the game');
   process.exit(0);
});

function execute(command, argument) {
    let response;
    switch (command) {
        case 'where':
        case 'w': 
            return game.getLocationInformation().then(locationInformation => {
                response = `you are in ${locationInformation.description}`;
                response += '\nand you can go to these location(s): '
                
                response += locationInformation.exits.reduce((allExits, exit)  => {
                    return allExits + `\n- ${exit}`;
                }, '');
                
                return Promise.resolve(response);
            });
        case 'goto':
        case 'g':
            if (argument === null || argument === undefined) {
                let err = new Error(`The input '${command}' needs an argument`)
                err.code = COMMAND_ERROR;
                return Promise.reject(err);
            }
            return game.goToLocation(argument).then((locationDescription) => {
                response = `you are in ${locationDescription}`;
                return Promise.resolve(response);
            });  
        default:
            let err = new Error(`The input: '${command}' is not defined`)
            err.code = COMMAND_ERROR;
            return Promise.reject(err);
    }
}