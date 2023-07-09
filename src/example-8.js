
function doubleNumbers(numArr) {
    return numArr.map(n => n * 2);
}

const res = doubleNumbers([1, 2, 3, 4, 5]);
console.log(res); // output: "[2, 4, 6, 8, 10]"