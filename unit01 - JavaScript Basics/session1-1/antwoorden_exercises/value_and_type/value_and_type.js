createGreeting = function (name) {
  return `hello ${name}`;
};

createGreeting("han"); //WAARDE: hello han TYPE: string
createGreeting(); //WAARDE: hello undefines TYPE: string
createGreeting; //WAARDE: Functie referentie TYPE: Function
createGreeting.toString(); //WAARDE: createGreeting = (name) => { return `hello ${name}`; } TYPE: string
