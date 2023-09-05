let nTaken = 0;

setTimeout(() => {
  console.log("Klaar met taak A");
  nTaken++;
  if (nTaken >= 3) {
    console.log("Klaar met alle taken");
  }
}, Math.random() * 1000);

setTimeout(() => {
  console.log("Klaar met taak B");
  nTaken++;
  if (nTaken >= 3) {
    console.log("Klaar met alle taken");
  }
}, Math.random() * 1000);

setTimeout(() => {
  console.log("Klaar met taak C");
  nTaken++;
  if (nTaken >= 3) {
    console.log("Klaar met alle taken");
  }
}, Math.random() * 1000);
