'use strict '

/*function logger() {
    console.log(`My name is Jonas`);

}

logger ();
logger();
logger();

function fruitProcessor (apples,oranges) {
    
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (5,0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice)

const num= Number(`23`);
console.log(num)*/


//function declaration
function calcAge1(birthYear) {;
    return 2037 - birthYear;
}

  
//function expression
const calcage2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcage2(1991);
console.log (age1,age2)