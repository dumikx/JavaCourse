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
/*function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const Age1 = calcAge1(1991); */

//function expression
/*const calcAge2 = function (birthYear) {
    return 2037 - birthYear;*/


/*const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstname} retires in ${retirement} years`;
}


console.log(yearUntilRetirement(1991, `Jonas`))
console.log(yearUntilRetirement(1990, `Bob`)) */
/*function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of  oranges.`
    return juice
}

console.log(fruitProcessor(2, 3)); */

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstname) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstname} if already retired`)
        return -1;
    }

    // return `${firstname} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, `Jonas`));
console.log(yearUntilRetirement(1950, `Mike`));


