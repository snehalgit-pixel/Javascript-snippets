/* Destructuring objects in javaScript*/
let address = {
    street: '16A Banerjee Para Road',
    area: 'Behala',
    city: 'Kolkata',
    pincode: 700060
};
const { street: s, pincode: p } = address;
const v1 = `Street and pincode ${s}\t\t ${p}`;
console.log(v1);