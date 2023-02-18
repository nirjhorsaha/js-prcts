function WordReverse(text) {
    const words = text.split(' ');
    // console.log(words);
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) { 
        const element = words[i];
        result.push(element);
        // console.log(element);
    }
    // return result;

    // join word 
    const JoinWord = result.join(' ');
    return JoinWord; 
}

const text = 'Complete Web Development Course';
console.log('Original Text: ', text);
const ReversedText = WordReverse(text);
console.log('Reversed Word: ' ,ReversedText); 