var ShoppingCart = {
    sunglass: 1,
    shirt: 3,
    shoes: 2,
    books: 5,
    trouser: 1
}
//  keys
// const keys = Object.keys(ShoppingCart);

// for (var i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }

// values
// const values = Object.values(ShoppingCart);

// for (var i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

// another way
for (propertyName in ShoppingCart) {
    const value = ShoppingCart[propertyName];
    console.log(propertyName, value);
}