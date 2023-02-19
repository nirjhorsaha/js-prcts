function radianToDegree(radian) {
    const pi = 3.14159265359;
    const degree = (radian * (180 / pi)).toFixed(2);
    return degree
}

const number = radianToDegree(25);
console.log(number, 'degree');