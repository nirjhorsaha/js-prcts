const phones = [
    { name: 'Samsung', storage: '64gb', ram: '6gb', price: 21000 },
    { name: 'Nokia', storage: '32gb', ram: '4gb', price: 18000 },
    { name: 'Oneplus', storage: '128gb', ram: '8gb', price: 35000 },
    { name: 'Symphony', storage: '32gb', ram: '4gb', price: 13500 },
    { name: 'Xiaomi', storage: '128gb', ram: '4gb', price: 24500 },
    { name: 'Oppo', storage: '128gb', ram: '6gb', price: 33500 },
    { name: 'Itel', storage: '32gb', ram: '3gb', price: 12500 },
    { name: 'lava', storage: '16gb', ram: '2gb', price: 10500 },
];

function cheapestPhones(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];
        // console.log(element);
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhones(phones);
console.log(mySelection);
