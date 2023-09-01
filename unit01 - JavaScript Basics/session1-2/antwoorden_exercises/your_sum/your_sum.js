let sequence = [40, 30, 20];

sequence.sum = function () {
    let theSum = 0;
    //Antwoord A
    for (number of sequence) {//je mag in dit geval ook this gebruiken (omdat het geen arrow functie is)
        theSum += number;
    }
    return theSum;
}

sequence.push(5);
console.log(sequence.sum()) 
//--> 95

sequence.push(5);
console.log(sequence.sum()); 
// --> 100

//Antwoord B
//Hier kun je over discussieren en hoe je niet te kunnen beantwoorden op de toets.

//Antwoord C
//sequence.push is geen pure functie omdat het de waarde van sequence verandert. Twee keer sequence.push 
//aanroepen met dezelfde waarde geeft niet hetzelfde resultaat.

