/* Vraag steeds wat we op de console krijgen te zien */

//1: zoals het er nu staat
function getName(name) {
  if (name === "") {
    throw new Error("Empty Name");
  }
  return name;
}

const names = ["ica", "", "han"];

for (let i = 0; i < names.length; i++) {
  try {
    //3: haal ook de `try` weg.
    //4: plaats de `try-catch` weer terug, en zet de `for`-lus in de `try`
    console.log(getName(names[i]));
  } catch (error) {
    // 2: haal de `catch` weg
    console.log(error.message);
  }
}
