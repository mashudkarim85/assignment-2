
function sortNumbers(numArr) {
    return numArr.sort((a, b) => a - b);
}

const result = sortNumbers([5, 2, 8, 1, 4]);
console.log(result); // output: [1, 2, 4, 5, 8]