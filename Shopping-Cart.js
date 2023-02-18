const shoppingItem = [
    {name: 'shirt', price : 1500},
    {name: 'shoe', price : 2500},
    {name: 'pant', price : 2000},
    {name: 'belt', price : 1000},
    {name: 'shocks', price : 500}
]

function shoppingCart(products) {
    let productSum = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        productSum += element.price;
        // console.log(element);
    }
    return productSum
}

const myItem = shoppingCart(shoppingItem);
console.log("Total Expense:" ,myItem);