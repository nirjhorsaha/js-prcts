const products = [
    { id: 1, name: 'xiaomi note 11', price: 19000 },
    { id: 2, name: 'nokia phone', price: 9000 },
    { id: 3, name: 'mac book air', price: 119000 },
    { id: 4, name: 'lenovo phone', price: 16000 },
    { id: 5, name: 'oneplus 7t', price: 30000 },
    { id: 6, name: 'samsung Phone', price: 20000 },
    { id: 6, name: 'lenovo yoga laptop', price: 55000 },
    { id: 6, name: 'dell inspiron laptop', price: 60000 },
];

function matchProducts(products, search) {
    const matchedItem = [];
    for (const product of products) {
        if (product.name.toLowercase().includes(search.toLowercase())) {
            matchedItem.push(product)
        }
    }
    return matchedItem;
}

const result = matchProducts(products, 'phone');
console.log(result);