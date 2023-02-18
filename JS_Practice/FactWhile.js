function factorial(number) {
    let i = 1;
    let result = 1;
    while (i <= number) {
        result = result * i;
        i++;
    }
    return result;
}
const n = factorial(5);
console.log(n);