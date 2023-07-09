
function filterEvenNumbers(numArr) {
    return numArr.filter(n => n % 2 === 0);
}

const even = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(even); // output: [2, 4]