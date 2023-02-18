function max(num1, num2, num3) {
    // console.log(num1, num2, num3);
    if ((num1 > num2) && (num1 > num3)){
        return num1;
    }
    else if ((num2 > num1) && (num2 > num3)){
        return num2;
    }
    else {
        return num3;
    }
}

const maxNum = max(60, 55, 7);
console.log('Large number is: ' ,maxNum);