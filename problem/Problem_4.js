/** problem-4:
 * this  findingBadData() - function take an array as an input, after that it will find out how many Bad data are there in the array and return that number.
 */

function findingBadData(data) {
    if (Array.isArray(data) !== true) {
        return "Enter a valid array";
    } else {
        let badData = 0;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element < 0) {
                badData++;
            }
        }
        return badData;
    }
}

const givenData = [2, -5, -7, -13];
// console.log(Array.isArray(givenData)); 
const checkdata = findingBadData(givenData);
console.log(checkdata);

