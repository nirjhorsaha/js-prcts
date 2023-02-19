const person = [
  { name: "sakib", age: 30 },
  { name: "samiul", age: 20 },
  { name: "sahid", age: 50 },
  { name: "samin", age: 10 },
];

function smallestPerson(person) {
    let smallest = person[0];
    for (let i = 0; i < person.length; i++) {
        const element = person[i];
        if (element.age < smallest.age) {
            smallest = element;
        }
    }
    return smallest;
};

const givenPerson = smallestPerson(person);
console.log('Smallest Person: ', givenPerson);

