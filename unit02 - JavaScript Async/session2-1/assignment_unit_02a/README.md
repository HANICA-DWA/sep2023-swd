# ICA Adventure met Asynchronous Callbacks

## Beschrijving
Je kunt je voorstellen dat wanneer de ICA Adventure erg groot wordt, het niet efficient is om de map van het hele spel in één keer te laden. Daarom hebben we in deze opgave een aparte web server gemaakt (genaamd map_server.js) die één locatie teruggeeft zodra erom gevraagd wordt.

Zodra een speler een locatie voor het eerst bezoekt, doet de functie `goToLocation` een http-request naar de map_server met de naam van de locatie die de speler wil bezoeken. Als de map_server deze locatie heeft teruggegeven, dan voegt game.js deze locatie toe aan de variabele `map` (en verplaatst de speler naar deze locatie op dezelfde manier zoals we vorige week hebben gedaan)

Het doen van een http-request is asynchroon en dat betekent dat alle code aangepast moet worden.

In main.js kun je de aanpassingen zien:
* De functie `execute` heeft nu een callback parameter (die `done` heet).
* `try-catch` is vervangen door error-afhandeling in de callback van `execute`
* `execute` returnt nu geen response meer, maar geeft deze response mee aan de `done` callback. Je ziet voor de aanroep van `done` echter nog wel een return staan, maar dit is om ervoor te zorgen dat de functie `execute` direct stopt en geen andere code meer uitvoert. 
* Om de opdracht niet te groot te maken hebben we alle acties die niet met verplaatsen te maken hebben (of bekijken waar je heen kunt) verwijderd uit game.js en main.js

Zie ook het commentaar in de code.

## Opdracht
### A1) in game.js
Iplementeer de functie `goToLocation` volgens de specificatie. Gebruik de module `request` om een http-request naar de map_server te sturen. 

Geef alleen een error object mee aan de `done` callback wanneer `request` een error oplevert.

### A2) in main.js
De code in main.js waarin `goToLocation` aanroept is nu nog synchroon. Verander deze code zodat deze op de goede manier omgaat met de nieuwe implementatie van `goToLocation` en `execute`.