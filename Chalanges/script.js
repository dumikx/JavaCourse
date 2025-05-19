//data 1

/*let massMark = 78;
let massJohn= 92;
const heightMark=1.69;
const heightJohn=1.95;

let bmiMark=massMark/heightMark **2;
let bmiJohn=massJohn/heightJohn **2;
const markHigherBMI=bmiMark>bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);

if (bmiMark>bmiJohn){console.log(`Mark's BMI (${bmiMark.toFixed(1)})is higher than John's ${bmiJohn.toFixed(1)}`)

}else{console.log(`John's BMI(${bmiJohn.toFixed(1)}) BMI is higher than Mark's ${bmiMark.toFixed(1)}`)

}

*/

/*let averageDolphins = (96, 108, 89) / 3;
let averageKoalas = (88, 91, 110) / 3;

const winnerDolphins = averageDolphins > averageKoalas;
const winnerKoalas = averageKoalas > averageDolphins;
const draw = averageDolphins === averageKoalas;
const bothTeamsMinScore = averageDolphins >= 100 && averageKoalas >= 100
const minScore = 100


if (winnerDolphins && averageDolphins >= 100) {
    console.log(`WinnerDolphins`)
} else if (winnerKoalas && averageKoalas >= 100) {
    console.log(`WinnerKoalas`)
} else if (draw && bothTeamsMinScore) {
    console.log(`Draw! Both win`)
} else if (!bothTeamsMinScore) {
    console.log(`No winner`)
} */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const averageDolphins = calcAverage(44, 23, 71)
const averageKoalas = calcAverage(65, 54, 49)

function checkWinner(averageDolphins, averageKoalas) {

    if (averageDolphins > 2 * averageKoalas) {
        console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`)
    } else
        if (averageKoalas > 2 * averageDolphins) {
            console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`)
        } else
            console.log("No team wins");
}

checkWinner(averageKoalas, averageDolphins)
