// check given num is odd
function OddNum(Numbers) {
    const oddNumbers = [];
    for (i = 0; i < Numbers.length; i++) {
        const index = i;
        const eliment = Numbers[index];
        if (eliment % 2 !== 0) {
            oddNumbers.push(eliment);
        }
    }
    return oddNumbers;
}

function SumOfAnArray(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const index = i;
        const eliment = num[index];
        sum += eliment;
        // console.log(index, eliment, sum);
    }
    return sum;
}

// odd numbers from array
const Numbers = [12, 65, 33, 74, 25, 47];
const OddNumbersArray = OddNum(Numbers);
console.log("Odd numbers:", OddNumbersArray);

// sum of odd numbers
const OddNumSum = SumOfAnArray(OddNumbersArray);
console.log("Odd numbers sum:", OddNumSum);
