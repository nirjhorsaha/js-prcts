function OddNumofArray(num) {
    for (let i = 0; i < num.length; i++) {
        const index = i;
        const eliment = num[index];
        if (eliment % 2 !== 0) {
            console.log(index, eliment );
            // console.log(eliment);
        }
    }
}

const myNum = [12, 65, 33, 74, 25, 47];
OddNumofArray(myNum);
