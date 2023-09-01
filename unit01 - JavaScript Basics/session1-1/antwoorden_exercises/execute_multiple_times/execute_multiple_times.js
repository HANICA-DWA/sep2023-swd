const executeNrOfTimes = (nrTimes, func) => {
    for (let i = 0; i < nrTimes; i++) {
        func(); //ANSWER
    }
}

const printHello = () => {
    console.log('hello');
}

executeNrOfTimes(5, printHello);
//Should output: 
// hello
// hello
// hello
// hello
// hello

//IN CLASS SHOW THAT this also works
executeNrOfTimes(5, () => {
    console.log('hello');
});


/** B) Het wordt lastig als je de functie 
 * ook een parameter wilt meegeven
 * Pas printHello of de aanroep van exectureNr aan zodat de je de naam kunt meegeven*/

const printHelloWithName = (name) => {
    console.log(`hello ${name}`);
}
