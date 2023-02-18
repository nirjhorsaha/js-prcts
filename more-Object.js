const students = {
    name: 'Jacky Chan',
    id: 12345,
    address: 'Vuter Goli',
    isSingle: true,
    friends: ['Raju', 'Dipu', 'Opu'],
    favMovie: [{ name: 'Inception', year: 2010 }, { name: 'Titanic', year: 1997 }],
    act: function () {
        console.log('this is act() - function');
    },
    car: {
        brand: 'tesla',
        price: 500000000,
        made: 2023,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
        }
    }
}

// console.log(students);
// console.log(students.friends);
students.act();