/* To test javaScript array functions
The codes can be tested on the console

Appending and deleting array elements
Appending can be done using the length function.
We assign an element at the position of arr[arr.length]

The disadvantage of delete function is that it leaves undefined holes in the array
*/
var arr1 = ["AAP", "Left", "Congress", "BJP", "AIMIM"];
arr1[arr1.length] = "DMK";
var n1 = arr1.length;
console.log(arr1);
console.log("length=" + n1);
delete arr1[0];
var n2 = arr1.length;
console.log(arr1);
console.log("length=" + n2);