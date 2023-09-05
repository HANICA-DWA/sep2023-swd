/* A */
function pureOrNot(name) {
    console.log(`hello ${name}`);
}
pureOrNot('han');
/* not pure: dependency on console */

/* B */
function pureOrNot() {
    return console;
}
pureOrNot();
/* not pure: dependency on console */

/* C */
function pureOrNot(name) {
    return `hello ${name}`;
}
pureOrNot('han');
/* pure */

/* D */
let name = 'han'
function pureOrNot(name) {
    return `hello ${name}`;
}
pureOrNot(name);
/* pure: the string is copied from global name to local name */

/* E */
let name = 'han';
function pureOrNot() {
    return `hello ${name}`;
}
pureOrNot();
/* not pure: dependency on global variable name */

/* F */
function pureOrNot(name) {
    let greeting = `hello ${name}`;
    return greeting;
}
pureOrNot('han');
/* pure */

/* G */
function pureOrNot(name) {
    return `hello ${name.toUpperCase()}`;
}
pureOrNot('han');
/* pure */

/* H */
let greeting = ''
function pureOrNot(name) {
    greeting = `hello ${name.toUpperCase()}`
    return greeting;
}
pureOrNot('han');
/* not pure: modifies global variable greeting */

/* I */
function getHan() {
    return 'han';
}

function pureOrNot(nameGetter) {
    return `hello ${nameGetter()}`;
}
pureOrNot(getHan);
/* pure: does not modify function parameter */
