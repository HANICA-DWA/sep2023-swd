# Interleaving

Een demo om te laten zien dat de vogorde van asynchrone callbacks totaal anders kan zijn dan de volgorde van die callbacks in de code (lexicale volgorde)

Als extra ook nog een demo waarin je laat zien dat dit tot onverwachte resultaten kan leiden als je gebruik maakt van shared data.

## Stappen 

1. **01_interleaving.js**. Laat de code zien en vraag wat de volgorde van letters is op het scherm. Speel daarna een beetje met de setTimeout nummers, of vraag suggesties uit de klas.
1. **02_interleaving_with_shared_data.js**. Laat de code zien en run deze. De bedoeling is dat er maar één naam wordt toegevoed aan de `members` lijst. Dit simuleert een situatie waarbij het checken van de data en het updaten van de data niet in één asynchrone call kan. Dit is bijvoorbeeld het geval bij de api van GitHub als je wil controleren hoeveel collaborators er aan een repo gekoppeld zijn. In dit geval gaat het goed, maar als je de `setTimeout` van 'D' in bijvoorbeeld 50 (regel 24) verandert gaat het mis. 