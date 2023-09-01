/* For each of the functions below write down the expected output of console.log */
/* Choose between: Exception, undefined, 'the value of the binding' */
/* To check your answer, uncomment the call to the function you want to test. */

testA1();
// testA2();
// testB1();
// testB2();
// testC1();
// testC2();
// testD1();
// testD2();

/* A1 */
function testA1() {
    console.log(a1); //-> ANSWER: error
    let a1 = 42;
}


/* A2 */
function testA2() {
    console.log(a2); //-> YOUR ANSWER: undefined
    var a2 = 42;
    
}

/* B1 */
function testB1() {
    if (true) {
        let b1 = 42;   
    }
    console.log(b1); //-> YOUR ANSWER: error
}

/* B2 */
function testB2() {
    if (true) {
        var b2 = 42;   
    }
    console.log(b2); //-> YOUR ANSWER: 10
}

/* C1 */
function testC1() {
    for (let c1 = 0; c1 < 42; c1++) {
        //do something interesting
    }
    console.log(c1); //--> YOUR ANSWER: error
}

/* C2 */
function testC2() {
    for (var c2 = 0; c2 < 42; c2++) {
        //do something interesting
    }

    console.log(c2); //--> YOUR ANSWER: 42
}

/* D1 */
function testD1() {
    function fun() {
        let d1 = 42;
    }
    console.log(d1); //--> YOUR ANSWER: error
}

/* D2 */
function testD2() {
    function fun() {
        var d2 = 42;
    }
    console.log(d2); //--> YOUR ANSWER: error
}