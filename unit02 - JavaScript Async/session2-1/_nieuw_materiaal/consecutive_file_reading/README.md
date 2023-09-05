# Uitleg en demo over Sync vs Async

Deze uitleg en demo is bedoeld om het verschil tussen sync en async nog duidelijker te krijgen.

De simpele use case is dat we de inhoud van de file willen lezen waar "important" data in staat. 
Daartoe lezen we een object uit `_index.json` en vervolgens pakken we de naam uit het `important` property uit dit object.

Je moet dus twee keer een readFile doen.

De reden dat we json data lezen zijn:

- hierdoor wordt de readfile wat interessanter en kunnen we er een eigen functie van maken
- JSON.parse kan een exceptie gooien, die we in het async geval niet kunnen vangen. Dit behandelen we in het volgende lesprogrammapunt. Dan behandelen we ook de `err` parameter van `readFile`.
- Omdat we de `err` parameter niet gebruiken, kun je deze vervangen door `_`.

In eerste instantie doen we twee keer een readfile en parsen we de JSON twee keer. Dan zien we dat het lezen van een file en het parsen van de JSON dubbele code is en maken we een functie readJson(Sync).

## Stappenplan

1. **01.readJsonSync_zonder_functie.js**. Laat eerst het synchrone voorbeeld zien, waarmee je de casus kunt uitleggen.
    - Leg nadruk op dat we hier een return gebruiken om het resultaat van de functie op te kunnen vangen.
    - Je kunt zeggen dat readFileSync een bestaande functie is die in veel situaties niet mag gebruiken.
1. **02_readJson_zonder_functie.js**. Nu bouwen we een async variant van het bovenstaande. Bouw dit langzaam op met de klas. Belangrijk is dus dat je niet kunt `return`-en, maar een functie moet meegeven aan `readFile`.
1. **03_readJsonSync.js**. Het lezen van een file en parsen van JSON is dubbele code. Dit gaan we wegwerken. _Natuurlijk kun je je bij twee regels afvragen of je dit al moet doen, maar het voorbeeld is al ingewikkeld genoeg._
1. **04_readJson**. Nu hetzelfde in het async-geval. Laat studenten dit eerst zelf proberen te maken voordat je naar het antwoord toewerkt.

Het probleem nu is dat de methode die je maakt (`readFile`) bij de eerste aanroep opnieuw `readFile` moet aanroepen, maar bij de tweede keer `console.log`. Hierdoor moet je de functie die je wilt aanroepen in `readJson` een abstracte naam geven als `done`, of `next` of zoiets.

## Note

Die laatste stap is voor veel mensen echt lastig. Wat hierbij kan helpen is:

1. als je een asynchrone functie definieert, je dus moet aangeven wanneer je de volgende functie wilt uitvoeren en welke data deze functie meekrijgt.
1. als je deze asynchrone functie aanroept, je dus moet aangeven wat er precies moet gebeuren.

Maar het vergt wel wat oefening voor de meesten...