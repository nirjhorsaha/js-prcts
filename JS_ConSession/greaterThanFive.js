function greaterThanFive(num) {
    // console.log(num);
    upperFive = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > 5) {
            upperFive++;
        }        
    }
    return upperFive;
}

const givenArray = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const number = greaterThanFive(givenArray);
console.log(number);