/*function describeCountry (country,population,capitalCity) {
    const asiString = `${country} has ${population} milion people and its 
    capital city is ${capitalCity}`
    return asiString;

}
const romaniaDescription = describeCountry(`romania`,6,`bucuresti`)
console.log(romaniaDescription)

const finlandDescription = describeCountry(`finland`,6,`Helsinki`)
console.log(finlandDescription)

const russiaDescription = describeCountry(`Rusia`,30,`Moscova`)
console.log(russiaDescription)

*/


/*const country = 'Romania'
const continent = "Europe"
let population = 19
let isIsland = false
const language = 'Romana'
const capitalCity =`Bucuresti`

console.log(country)
console.log(continent)
console.log(population)

let halfPopulation = (population / 2)
halfPopulation++
console.log(halfPopulation)
console.log(population > 6)
console.log(population < 33)*/


/*const description = `${country} is in europe and its ${population} milion people speak ${language}`

console.log(description)

if (population > 33) {
    console.log(`${country} population is above average`)

} else {
    console.log(`${country} population is ${33 - population} below average`)

}

if (language==`English` && population<50 && !isIsland){
    console.log(`You should live in Romania`)
} else {
    console.log(`Romania does not meet our criteria`)
}

switch (language) {
    case `chinese`:
    case `mandarin`:
    console.log(`Most number of native speakers!`);
    break;

    case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;

    case `english` :
    console.log(`3rd palce`);
    break;

    case `hindi`:
    console.log(`Number 4`);
    break;

    case `arabic`:
    console.log(`5th most spoken language`);
    break;

    default:
    console.log(`Great language too:D `)*/

/*console.log (`9`-`5`)
console.log(`19`-`13`+`17`)
console.log(`19`-`13`+ 17)
console.log(`123`<57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

/*let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only 1`)
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}*/

function percentageOfWorld1(population) {
    return population / 7900 * 100
};

const chinaPopulation = percentageOfWorld1(1411);
console.log(chinaPopulation);

const russiaPopulation = percentageOfWorld1(143);
console.log(russiaPopulation);

const romaniaPopulation = percentageOfWorld1(22);
console.log(romaniaPopulation);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100
};

const percentageofworld3 = (population) => population / 7900 * 100;
const mamaPopulation = percentageofworld3(11111)
console.log(mamaPopulation)

const country1Population = percentageOfWorld2(123);
console.log(country1Population);

const country2Population = percentageOfWorld2(1211);
console.log(country2Population);

const country3Population = percentageOfWorld2(1);
console.log(country3Population);



function describePopulation(country, population) {
    const popPercentage = percentageOfWorld1(population)
    const stringPopulation = `${country} has a ${population} milion people, which is about ${popPercentage}of the world`
    return stringPopulation
}

console.log(describePopulation("china", 1000))