var laptop = {
    keyboard: 1,
    mouse: 2,
    charger: 1,
    ssd: "8gb",
    brand: 'HP'
}

// console.log(laptop);
// way-1
var details = laptop.brand;
console.log(details);

// alternative system
var details2 = laptop['mouse']
console.log(details2);

// object property
var details3 = Object.keys(laptop);
// console.log(details3);

// object values
var details3 = Object.values(laptop);
// console.log(details3);

var details4 = 'brand';
var propertyValue = laptop[details4];
console.log(propertyValue)


// set property values
laptop.brand = 'MSI';
// console.log(laptop);

laptop['ssd'] = '16gb';
// console.log(laptop);
