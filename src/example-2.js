
function sumNumbers(...rest) {
    return rest.reduce((sum, num) => sum + num, 0);
}

const res = sumNumbers(1, 2, 3, 4, 5);
console.log(res); // output: 15