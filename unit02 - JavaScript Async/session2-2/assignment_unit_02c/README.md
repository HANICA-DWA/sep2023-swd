# ICA Adventure met Async/Await

In deze opgave vervangen we de Promise-code met de synthactic sugar Async/Await.

Ook is weer de functionaliteit voor het weergeven van informatie over een locatie is als voorbeeld gegeven:

* **game.js:** de functie `game.getLocationInfo` begint nu met `async` en achter het `return`-keyword staat nu weer alleen de data die de functie teruggeeft. Omdat de functie 'async' is retourneert het echter wel een Promise.
* **main.js:** ook `execute` begint nu met het keyword `async`.

## Opgave

### C1) In main.js

Copy-paste  de promise-implementatie die je in assignment_1 hebt gemaakt hier. Dit kunnen we helaas niet vervangen door async/await (waarom niet)?

### C2) In game.js

Herschrijf de Promise-stijl implementatie van `game.goToLocation` naar een Async/Await stijl.

### C3) In main.js

Herschrijf de Promise-stijl aanroep van `game.goToLocation` aan in `case 'where'` (en `case w`) naar een Async/Await stijl