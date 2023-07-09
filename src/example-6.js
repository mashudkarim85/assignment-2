
function getLargestNumber(num1, num2) {
    return num1 > num2 && num1 || num2;
}

const large_num = getLargestNumber(10, 5);
console.log(large_num); // output: 10