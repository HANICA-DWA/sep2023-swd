# Oefenen en uitleg met Execptions in asynchronous code

## Stappenplan

1. **01_readJsonSync.js**. Laat zien dat dit werkt. Dat het handig is dat we maar één try-catch statement nodig hebben. Teken daarbij het geheugenmodel.
1. **02_readJsonWerktNiet.js**. Laat zien dat dit niet werkt. Vraag de klas waarom niet???Daarna kun je een geheugenmodel tekeken. Zie ook de vier svg-tjes.
1. **03_terug_naar_de_timeout.js**. Dit is de demo uit de video. Laat zien de de Error niet gevangen wordt en teken een geheugenmodel om dit te laten zien. De functie waarmee de try-catch geassocieerd is, is al van de stack verwijderd. Zie ook de svg-tjes
1. **04_readFile_and_the_err.js**. Laat zien hoe node dit oplost. De eerste param is altijd een error. Als er een error is opgetreden dan wordt deze parameter gevuld met het error-object, anders is deze `null`.
1. **05_readJson.js**. Laat studenten dit patroon eerst zelf implementeren in de readJson
1. **06_readJson_met_try_catch_werkt_niet.js**. Jaha. Dit is dan weer een error die synchroon optreedt.
1. **07_readJson_werkt_wel.js**.Oplossing: gebruik een `try...catch` in de functie `readJson()`.
