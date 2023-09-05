# Uitleg over modules in Node

De uitleg in dit stuk is geïnspireerd op hoofdstuk 10 van Eloqent JavaScript (maar gebruikt het niet omdat er concepten worden gebruikt die pas in de volgende sessie worden behandeld, waarvan met name arrays en objecten problematisch zijn).

Modules worden niet schriftelijk getoetst, maar zitten wel in de assignment van unit 1

## De casus

We hebben een functie die een waarde (value) met 1 ophoogt en de nieuwe waarde retourneert. De rest van de code mag alleen bij increment en niet de waarde zelf aanpassen.

1. **vroeger (BROWSER-DEMO)**

   - laat index.html in de **_browser_** zien en laat zien dat je nu `value` bedoeld, of onbedoeld, kunt aanpassen.

2. **ad hoc (BROWSER-DEMO)**

   - door `value` in een functie te zetten kun je deze beschermen tegen toegang van buiten af.
   - dit is een closure.
   - eventueel kun je van de code een IIIFE (Immediately Invoked Function Expression) laten zien:

     ```javascript
     const increment = (function() {
       let value = 0;

       return () => {
         value++;
         return value;
       };
     })();
     ```

3. **CommonJS (NODE-DEMO)**

   - Node voorkomt dat scripts bij elkaars data kunnen. Elk script heeft een module systeem waarin je kunt aangeven welke data beschikbaar wilt stellen aan andere scripts.
   - Hiervoor houdt Node voor elk script een `module`-variabele bij. In `module.exports` kun je de data plaatsen die je beschikbaar wilt stellen. Je kunt hier een functie in stoppen, maar ook getallen, strings (en objecten (volgende les))
   - Zie incrementor.js
   - Met `require` haal je de
   - Zie main.js. Misschien opmerking maken over `./` (huidige map) en `../` (de omliggende map).
   - `require` voert het script uit alsof het een functie is (anders dan bijvoorbeeld `import` in Java).
   - Het module systeem van Node houdt bij of een bepaald script al ge-`require`-ed is en voert het script niet nogmaals uit.

4. **Ingebouwde Modules**

   - Node kent een aantal ingebouwde modules
   - Zie [Node Api](https://nodejs.org/api/) en [File System](https://nodejs.org/api/fs.html#fs_file_system)
   - Laat code zien. Hierin wordt een file geopend (synchroon, async is pas in unit 2): [readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options).

5. **NPM eco-systeem**
   - Er bestaat erg veel door anderen gebouwde functionaliteit die niet bij Node geleverd is, maar waar je wel zomaar bij kunt.
   - Deze functionaliteit is beschikbaar via een zgn package (die een of meerdere modules bevat).
   - Alle packages zijn te vinden op [npm](https://www.npmjs.com/).
   - Vraag de klas om een functionaliteit en kijk of je die package kunt vinden
   - Installeer deze package, of een andere via `npm install <package-name>` en laat zien hoe je er in de code bij kunt.
   - Je kunt ook een bestandje maken waarin je alle packages die jouw project nodig heeft kun zetten, maar daar komen we later op terug.
   - Een meer specifieke beschrijving hoe je NPM in dit voorbeeld gebruikt staat als commentaar in het bestand `main.js`.
