const country = 'Romania'
const continent = "Europe"
let population = 19
let isIsland = false
const language = 'Romana'

console.log(country)
console.log(continent)
console.log(population)

let halfPopulation = (population / 2)
halfPopulation++
console.log(halfPopulation)
console.log(population > 6)
console.log(population < 33)


const description = `${country} is in europe and its ${population} milion people speak ${language}`

console.log(description)

if (population > 33) {
    console.log(`${country} population is above average`)

} else {
    console.log(`${country} population is ${33 - population} below average`)

}

console.log (`9`-`5`)
console.log(`19`-`13`+`17`)
console.log(`19`-`13`+ 17)
console.log(`123`<57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
