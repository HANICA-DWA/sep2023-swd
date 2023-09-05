console.log('Hi');

try {
    setTimeout(() => {
        console.log('there');
        throw new Error('BOOOM');
    }, 100);
} catch (err) {
    console.log('Something went wrong');
    console.log(err.message);
}

console.log('DWA - SWD');