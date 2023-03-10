/* Demonstrating spread operator */
let example1 = [1, 2, 3, 4, 5, 6, 9];
example2 = [...example1];
example2.splice(6, 0, 7, 8);
console.log(example2);
/* Adding elements 7 and 8 after 6 */

/* Spread operator unwraps the elements in example1 and assigns them to example2
*/