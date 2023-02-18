function SumOfAnArray(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const index = i;
        const eliment = num[index];
        sum += eliment;
        console.log(index, eliment, sum);
    }
    return sum;
}

const myNum = [12, 65, 33, 74, 25, 47];
SumOfAnArray(myNum);
