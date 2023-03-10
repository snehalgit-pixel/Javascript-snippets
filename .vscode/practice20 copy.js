/* Demonstrating sets: Set is an unordered collection of unique elements
If we declare a set in javaScript as [1,1,1,1,2,2,2,2,3], then size of the set will be 3 as we have 3 unique elements {1,2,3} only
Values can be added and deleted from the set.
While deleting values, the return is a boolean value (true,false) based on whether the element to be deleted has been found in the set or not.
*/
const set1 = new Set([1, 1, 1, 2, 2, 2, 2, 3]);
let size1 = set1.size;
const v = `Size of the set=${size1}`;
console.log(v);
set1.add(4).add(5);
console.log(set1);
console.log(set1.delete(3));
console.log(set1);

/* 'has' is used to check whether an element is present in the set or not.
Returns boolean value - true or false */
console.log(set1.has(5));

/* clear is used to clean the entire Set */
set1.clear();
console.log(set1.size);

/* Size of the set is zero now */