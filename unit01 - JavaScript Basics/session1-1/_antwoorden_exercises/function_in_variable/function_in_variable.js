/*
 * Laat een geheugenmodel zien van de uitvoer van deze functie op regel 10  
 */

const testFunction = () => {
    console.log('test');
}

const x = testFunction;
x(); //Werkt dit? Waarom wel, of waarom niet.

//Dit werkt. De variabelen x en testFunction wijzen beide naar dezelfde functie definitie.