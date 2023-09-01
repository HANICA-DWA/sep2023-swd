/* A */

let doAllTasks = (/* Pas hier de code aan voor onderdeel A */) => {
    setTimeout(() => {
        console.log('Taak 1 klaar');
        setTimeout(() => {
            console.log('Taak 2 klaar');
            /* A) Plaats je aanpassing op deze regel */
        }, Math.random() * 100);
    }, Math.random() * 100);    
};

/* B */

let printWhenFinished = () => {
    console.log('Alle taken klaar');
    console.log('nu gaan we andere dingen doen');
};

doAllTasks(/* B) Pas hier de code aan */);

/* C */

let doAllTasks2 = (/* Pas hier de code aan voor onderdeel C */) => {
    let completedTasks = [];
    setTimeout(() => {
        completedTasks.push('Taak 1 klaar');
        setTimeout(() => {
            completedTasks.push('Taak 2 klaar');
            /* C) Plaats je aanpassing op deze regel */
        }, Math.random() * 100);
    }, Math.random() * 100);    
}; 

/* D */
let printResults = (resultList) => {
    console.log('Alle taken klaar, dit zijn de resultaten');
    resultList.forEach((result) => {
        console.log(result);
    });
};

doAllTasks2(/* D) Pas hier de code aan */);