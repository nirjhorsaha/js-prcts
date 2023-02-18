function removeDuplicates(names) {
    // console.log(names);
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (uniqueNames.includes(element) == false) {
            uniqueNames.push(element);
        }
    }
    return uniqueNames;
}

const friendsName = [
    "abul",
    "babul",
    "sam",
    "kabul",
    "dabul",
    "sam",
    "jam",
    "kane",
    "abul",
    "babul",
    "kabul",
    "mina",
    "rina",
    "kane",
];

const final = removeDuplicates(friendsName);
console.log(final);
