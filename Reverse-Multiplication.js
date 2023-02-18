function rev_multiplication(number) {
    let result = 1;
    for (i = number; i >= 1; i--){
        result = result * i;
        // console.log(i);
    }
    return result;
}

const result = rev_multiplication(10);
console.log(result);