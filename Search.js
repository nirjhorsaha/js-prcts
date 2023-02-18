const lyrics = 'tumi bondhu kala pakhi ami jeno ki';

const searchString = 'Pakhi';
const findString = lyrics.includes(searchString);
console.log(findString);

// ignore case
const lyricsLowerCase = lyrics.toLowerCase();
const findStringLower = searchString.toLowerCase(); 
const doesExist = lyricsLowerCase.includes(findStringLower);
// console.log(doesExist);

// use condition using indexof
if (lyrics.indexOf('Jeno') !== -1) {
    console.log('exist');
}
else
    console.log('not exist');
