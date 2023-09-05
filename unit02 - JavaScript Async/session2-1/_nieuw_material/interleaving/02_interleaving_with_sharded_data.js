console.log('A');
let members = [];

setTimeout(() => {
    if (members.length < 1) {
        console.log('B');
        setTimeout(() => {
            console.log('C');
            members.push('ica');
            console.log(members);
        }, 200);
    }
}, 100);    

setTimeout(() => {
    if (members.length < 1) {
        console.log('D');
        setTimeout(() => {
            console.log('E');
            members.push('han');
            console.log(members);
        }, 200);
    }
}, 50); 

console.log('F');