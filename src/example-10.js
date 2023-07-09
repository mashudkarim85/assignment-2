
function sumArray(numArr) {
    return numArr.reduce((sum, num) => sum + num, 0);
}

const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum); // output: 15