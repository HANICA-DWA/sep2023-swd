const fs = require("fs");

/* Definitie van de functie (hierbinnen roepen weten we wanneer we de volgende functie moeten uitvoeren
we weten alleen niet hoe die heet)
*/
const readJson = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    const contents = JSON.parse(data);
    done(contents);
  });
};

/* Aanroep van de functie. Bij de aanroep definieren we een nieuwe functie die aangeroepen moeten worden 
op het juiste moment */
readJson("_index.json", (fileList) => {
  readJson(fileList.important, (fileContents) => {
    console.log(fileContents);
  });
});

/* Omdat je bij de tweede aanroep van readJson de output direct doorgeeft aan console.log, kun je de anonyme functie 
  ook weglaten:*/
// readJson("_index.json", (fileList) => {
//   readJson(fileList.important, console.log);
// });
