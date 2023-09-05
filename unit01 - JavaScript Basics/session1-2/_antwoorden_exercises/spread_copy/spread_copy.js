person1 = {name: 'han', scores: [5.4, 8.9]};

person2 = {...person1};
person2.name = 'ica'

console.log(person1.name)
//--> han

console.log(person2.name);
//--> ica

person2.scores[0] = 5.5;

console.log(person1.scores);
//--> [ 5.5, 8.9 ]