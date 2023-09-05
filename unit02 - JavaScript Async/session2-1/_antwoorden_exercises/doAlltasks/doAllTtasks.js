/* Antwoorden */

/* A */

let doAllTasks = (done) => {
  setTimeout(() => {
    console.log("Taak 1 klaar");
    setTimeout(() => {
      console.log("Taak 2 klaar");
      done();
    }, Math.random() * 100);
  }, Math.random() * 100);
};

/* B */

let printWhenFinished = () => {
  console.log("Alle taken klaar");
  console.log("nu gaan we andere dingen doen");
};

//doAllTasks(printWhenFinished);

/* C */

let doAllTasks2 = (done) => {
  let completedTasks = [];
  setTimeout(() => {
    completedTasks.push("Taak 1 klaar");
    setTimeout(() => {
      completedTasks.push("Taak 2 klaar");
      done(completedTasks);
    }, Math.random() * 100);
  }, Math.random() * 100);
};

/* D */

let printResults = (resultList) => {
  console.log("Alle taken klaar, dit zijn de resultaten");
  resultList.forEach((result) => {
    console.log(result);
  });
};

//doAllTasks2(printResults);

/* De opgave zelf */

/* A */

// let doAllTasks = (/* Pas hier de code aan voor onderdeel A */) => {
//     setTimeout(() => {
//         console.log('Taak 1 klaar');
//         setTimeout(() => {
//         	taskResult.push(41);
//             console.log('Taak 2 klaar');
//             /* Pas hier de code aan voor onderdeel A */
//         }, Math.random() * 100);
//     }, Math.random() * 100);
// };

/* B */

// let printWhenFinished = () => {
//     console.log('Alle taken klaar');
//     console.log('nu gaan we andere dingen doen');
// };

// //Pas deze aanroep aan
// doAllTasks(/* Pas hier de code aan */);

/* C */

// let doAllTasks2 = (/* Pas hier de code aan voor onderdeel C */) => {
//     let completedTasks = [];
//     setTimeout(() => {
//         completedTasks.push('Taak 1 klaar');
//         setTimeout(() => {
//             completedTasks.push('Taak 2 klaar');
//             /* Pas hier de code aan voor onderdeel C */
//         }, Math.random() * 100);
//     }, Math.random() * 100);
// };

/* D */
// let printResults = (resultList) => {
//     console.log('Alle taken klaar, dit zijn de resultaten');
//     resultList.forEach((result) => {
//         console.log(result);
//     });
// };

// //Pas deze aanroep aan
// doAllTasks(/* Pas hier de code aan */);
