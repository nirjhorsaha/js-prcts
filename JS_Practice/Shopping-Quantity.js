function shoppingCart(products) {
  let productSum = 0;
  for (let i = 0; i < products.length; i++) {
      const element = products[i];
      // console.log(element);
      const totalProduct = element.price * element.quantity;
    productSum += totalProduct;
  }
  return productSum;
}


const shoppingItem = [
  { name: "shirt", price: 1500, quantity: 5 },
  { name: "shoe", price: 2500, quantity: 2 },
  { name: "pant", price: 2000, quantity: 5 },
  { name: "belt", price: 1000, quantity: 2 },
  { name: "shocks", price: 500, quantity: 2 },
];
const myItem = shoppingCart(shoppingItem);
console.log("Total Expense:", myItem);
