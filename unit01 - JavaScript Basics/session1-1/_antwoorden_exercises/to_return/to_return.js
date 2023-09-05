/* A */
// function square(x) {
//     return x * x;
// }
/* 100 */

/* B */
// function square(x) {
//     x * x;
// }
/* undefined */

/* C */
function square(x) {
    return console.log(x * x);
}
/* undefined */

/* D */
// const square = x => {
//     return x * x;
// }
/* 100 */

/* E */
// const square = x => {
//     x * x;
// }
/* undefined */

/* F */
// const square = x => x * x;
/* 100 */

/* G */
// const square = x => return x * x;
/* error */

/* H */
// const square = x => console.log(x * x);
/* undefined */

console.log(square(10));