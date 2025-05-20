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

/*const calcAge = function (birthYear) {
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


*/

/*const friend1 = `Michael`;
const friend2 = `Steven`;
const firend3 = `Peter`;

const friends = [`Michael`, 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstname = 'Jonas'
const jonas = [firstname, 'Prenume', 2037 - 1991, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages); */

const friends = ['Michael', 'Steven', 'Peter']
friends.push('Jay');
console.log(friends)