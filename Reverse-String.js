function reverseString(text) {
    // console.log(text);
    reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        // console.log(element, reversed);
    }
    return reversed;
}

const myText = 'Learning Java Script';
console.log('Original string: ', myText);
const reverseText = reverseString(myText);
console.log('Reversed String: ' ,reverseText);