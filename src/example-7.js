
function getAddressCity(obj) {
    return obj?.city ?? "Unknown";
}

const address = { street: '123 Main St', country: 'USA' };
const res = getAddressCity(address);
console.log(res); // output: "Unknown"