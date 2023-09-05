const numbers = [2, 1, 0];

numbers.forEach((number) => {
  console.log("A");
  setTimeout(() => {
    console.log(number);
  }, number * 100);
  console.log("B");
});
console.log("C");

//Antwoord
// A
// B
// A
// B
// A
// B
// C
// 1
// 0
// 2
