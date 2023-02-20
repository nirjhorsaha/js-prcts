/** problem-3:
 * this isLGSeven() - function take a  number as an input, after that it
 * returns the difference between the input value and 7. If this difference is less than 7, it returns the subtraction between the input value and 7. Otherwise it will return double of the input. 
 */

function isLGSeven(checkNumber) {
  if (typeof checkNumber !== 'number') {
        // check number validation
        return "Please enter a number";
  } else {
      if (checkNumber < 7) {
          return checkNumber - 7;
      } else {
        return checkNumber * 2;
      }
      
    }
}

const number = isLGSeven(-15);
console.log(number);

