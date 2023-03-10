/* To test javaScript array functions
The codes can be tested on the console

slice() method slices out a piece of an array into a new array
Applications are depicted below
*/
var politicalparties = ["CPI(M)", "CPI", "Forward Bloc", "DYFI", "AAP", "Congress", "DMK", "RJD", "JDU", "BJP", "AIMIM"];
var centralright = politicalparties.slice(4);
console.log("Central-Right=" + centralright);
var right = politicalparties.slice(9);
console.log("Right=" + right);
var left = politicalparties.slice(0, 4);
/* slice(0,4) selects elements starting from 0 till position (4-1=3) */
console.log("Left=" + left);
var centrist = politicalparties.slice(4, 9);
console.log("Centrist=" + centrist);
/* slice(4,9) selects elements starting from 4 till position (9-1=8) */