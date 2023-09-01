"use strict";

/*
 * Ask for each case:
 *
 * 1) what's the result?
 * 2) what's the datatype?
 */

/**  A **/
function add(a, b) {
  return a + b;
}
var result = add(1, 2);
console.log(result);

/**  B **/
function add(a, b) {
  return a + b;
}
var result = add;
console.log(result);

/**  C **/
function add(a, b) {
  return a + b;
}
var intermediate = add;
var result = intermediate(1, 2);
console.log(result);

/**  D **/
function add(a, b) {
  return a + b;
}

var result = result(1, 2);
console.log(result);

/**  E **/
var result = function (a, b) {
  return a + b;
};
console.log(result);

/**  F **/
var result = function add(a, b) {
  return a + b;
};
console.log(result);

/**  G **/
var result = (function (a, b) {
  return a + b;
})(1, 2);
console.log(result);
