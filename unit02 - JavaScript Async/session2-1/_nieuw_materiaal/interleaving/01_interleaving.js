console.log("A");

setTimeout(() => {
  console.log("B");
  setTimeout(() => {
    console.log("C");
  }, 200);
}, 100);

setTimeout(() => {
  console.log("D");
  setTimeout(() => {
    console.log("E");
  }, 200);
}, 1);

console.log("F");
