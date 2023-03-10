/* Template literals are string literals allowing embedded expressions.*/
let var1 = 'Hello \n' + '\t World';
console.log(var1);
let var2 = 'Welcome Message';
const var3 = `${var1} \t \t ${var2}`;
console.log("Variable 3=" + var3);
const var4 = `${var1} \t ${var2} \t ${var3} \n Examples of template literals`;
console.log(var4);
/* Demonstrating template literal */