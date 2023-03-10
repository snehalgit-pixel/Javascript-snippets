/* To test javaScript array functions
The codes can be tested on the console

Splicing an array
splice() method can be used to add new elements in the array
The first parameter defines the position where new elements should be added
The second parameter defines how many elements should be removed
The rest of the parameters define the new elements
splice() method returns an array with the deleted items
*/
var arr1 = ["AAP", "Left", "Congress", "BJP", "AIMIM"];
arr1.splice(2, 0, "RJD", "JDU");
console.log(arr1);
/* splice() can be used to remove elements of the array as well*/
arr1.splice(3, 1);
/* Element at index 3 will be deleted*/
console.log(arr1);
