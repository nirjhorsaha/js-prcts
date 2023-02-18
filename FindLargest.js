function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [65, 100, 7, 250, 20, 207];
const tallest = maxInArray(heights);
console.log('Tallest person is: ' ,tallest);
