function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;    
    }
    return sum;
}

const givenNumber = summation(10);
console.log(givenNumber);

// another way
// n = 3;
// let sum = (n * (n + 1) / 2);
// console.log(sum);