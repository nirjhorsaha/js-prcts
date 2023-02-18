function add(num1, num2) {
    // console.log(num1, num2);
    console.log(arguments);  // its called 'array like object'. only access inside function. 
    console.log(arguments[2]);

}
// add(12, 15);
add(12, 15, 20, 55, 67, 107);