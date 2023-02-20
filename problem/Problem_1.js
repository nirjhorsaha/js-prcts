/** problem-1:
 * This mindGame() - function take a positive number as an input, after that Multiply that number by 3, then add 10, then divide by 2, then subtract 5 and finally return the output
 */
function mindGame(num) {
    if (typeof num !== 'number') {
        // check number validation
        return "Please enter a number";
    } else {
         num = (num * 3 + 10) / 2 - 5;
        return num;
    }
}
const number = mindGame(33);
console.log(number);

