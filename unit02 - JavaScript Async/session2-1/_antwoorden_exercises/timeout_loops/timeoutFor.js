var i;

for (i = 0; i < 3; i++) {
  console.log("A");
  setTimeout(() => {
    console.log(i);
  }, i * 100);
  console.log("B");
}
console.log("C");

// Antwoord
// A
// B
// A
// B
// A
// B
// C
// 3
// 3
// 3

/* OPMERKING

    vervang de 'var'-declaratie door 'let' en kijk wat er gebeurt.
    Plaats daarna de 'let' declaratie in de head van de for-loop.

*/
