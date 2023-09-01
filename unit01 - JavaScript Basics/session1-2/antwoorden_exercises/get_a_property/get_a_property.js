let value = {
    fill: 'green'
};

console.log(value.fill);

console.log(value['fill']);

// console.log(value[fill]);

console.log(value[0]);

const x = 'fill';
console.log(value[x]);

// console.log(value[y]);

value.stroke = 'green';
console.log(value.stroke);