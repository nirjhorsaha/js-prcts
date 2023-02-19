function checkNameLength(friendOne, friendTwo) {
    if (friendOne.length > friendTwo.length) {
        return friendOne;
    } 
    return friendTwo;
}

function reverseName(text) {
    reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed += element;
    }
    return reversed;
}

const friends = checkNameLength('Michael', 'Jacky');
console.log(friends);

const name = reverseName(friends);
console.log('Reversed Name:' ,name);
