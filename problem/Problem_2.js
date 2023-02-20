/** problem-2:
 * This evenOdd() - function take a string as an input, after that it will gave output based on the total number of characters in the String. The output would  be 'even' or 'odd'.
 */
function evenOdd(word) {
    if (typeof word !== "string") {
      //check string validation
      return "Please enter a string";
    } else {
    let stringlength = word.length;
    if (stringlength % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

const text = evenOdd("Batch7");
console.log(text);


