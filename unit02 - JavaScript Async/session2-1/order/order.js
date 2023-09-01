const lijst = ['A', 'B'];

setTimeout(() => {
    console.log('C');
});

lijst.forEach((item) => {
    console.log(item);
});

console.log('D');