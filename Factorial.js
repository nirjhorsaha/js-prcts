function factorial(number) {
  let result = 1;
  for (i = 1; i <= number; i++) {
      result = result * i;
      console.log(i, result);
  }
  return result;
}

const number = 9;
const result = factorial(number);
console.log("Factorial of : ",  number, 'is', result);
