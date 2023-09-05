const increment = require("./incrementor");

console.log(increment());

value = undefined;

console.log(increment());

//De module is gecached en wordt niet nogmaals uitgevoerd.
// const increment2 = require('./incrementor');

// console.log(increment2());
