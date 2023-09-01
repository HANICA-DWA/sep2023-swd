var i;

for (i = 0; i < 3; i++) {
    console.log('A');
    setTimeout(() => {
        console.log(i);
    }, i * 100);
    console.log('B');
}
console.log('C');

