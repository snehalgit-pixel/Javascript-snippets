/* To test javaScript array functions
The codes can be tested on the console

Merging of arrays using concat function
concat function always returns a new array
*/
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var m1 = arr1.concat(arr2);
console.log("Merging arr1 and arr2=" + m1);
var m2 = arr1.concat(arr2, arr3);
console.log("Merging all three arrays=" + m2);