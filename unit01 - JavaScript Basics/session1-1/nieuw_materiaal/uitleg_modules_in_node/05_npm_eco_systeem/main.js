/*

  Om packages vanuit NPM te kunnen gebruiken hebben we eerst een bestand nodig
  waarin alle 'dependencies' voor dit project beschreven staan.
  Dit bestand heet `package.json` en kunnen we aanmaken door het volgende
  commando vanaf de commandline in te voeren:
  
    $ npm init

  NB: zorg dat je in de juiste directory staat; in dit geval dezelfde directory
  waar ook dit bestand staat.
  
  Bij elke vraag kun je met <enter> de voorgestelde default waarde accepteren
  (dat is voor nu prima).

  Er is nu een `package.json` bestand aangemaakt. Bekijk dit bestand.
  Je zult zien dat hier een beschrijving van het project in staat. Je kunt
  bijvoorbeeld een extra 'script' opnemen hoe het programma gestart moet worden.
  Voeg daarvoor de volgende regel toe (binnen het onderdeel `scripts`):

    "start": "node main.js",

  Het onderdeel `scripts` zou er nu als volgt uit moeten zien:

    "scripts": {
      "start": "node main.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
  
  Nu willen we uiteraard een bestaande library (in npm termen spreken we van
  een `package`) toevoegen.
  Alle mogelijke packages kun je vinden op https://www.npmjs.com. Laten we voor
  dit voorbeeld het package 'cowsay' gebruiken. Meer informatie hierover kun je
  vinden op https://www.npmjs.com/package/cowsay.

  Om dit package te gebruiken geven we het volgende commando:

    $ npm install cowsay

  Je zult zien dat het package wordt gedownload van internet (samen met alle
  packages die door cowsay gebruikt worden) en in de directory `node_modules`
  worden geplaatst.

  In het bestand `package.json` zijn nu automatisch de volgende regels
  toegevoegd:

    "dependencies": {
      "cowsay": "^1.4.0"
    }
  
  Dit is precies wat we bedoelen: ons project heeft een dependency naar het
  cowsay package. Elke keer als we ons project willen gebruiken moeten we
  alle packages downloaden voordat we ons programma kunnen gebruiken.

  Nu kun je onderstaande code 'runnen' door vanaf de commandline het volgende
  commando te geven:

    $ npm start

  
  Extra opmerkingen:
  - De directory `node_modules` wordt niet in je versiebeheersysteem (bv. Git)
    opgenomen. Sterker nog: je kunt deze directory op elk willekeurig moment
    verwijderen, en met het volgende command worden alle packages die in
    `package.json` staan opnieuw gedownload.

      $ npm install

    Probeer het maar eens uit!

  - Het bestand `package.json` (en `package-lock.json`) neem je wel op in je
    versiebeheersysteem.
*/

// hier verwijzen we naar de package 'cowsay'
var cowsay = require("cowsay");

// gebruik de functie `say` uit het package
const s = cowsay.say({ text: "Hello DWA" });

// druk de waarde van `s` af
console.log(s);
