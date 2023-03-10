/* Set, WeakSet, Map, WeakMap */
let myArr1 = [1, 2, 3, 4, 5];
let mySet1 = new Set(myArr1);
mySet1.add(6);
mySet1.add('7');
console.log(mySet1);
mySet1.add({ x: 12, y: 14 });


/* Displaying each element of the Set */

mySet1.forEach(function (val) {
    console.log(val);
});

/*  Deleting one element */
mySet1.delete('7');
console.log(mySet1);

/*  Deleting all the elements */

mySet1.clear();
console.log(mySet1.size);

/* Maps have key:value pairs */

let myMap1 = new Map([['a', '1'], ['b', '2'], ['c', '3']]);
myMap1.set('d', '4');
console.log(myMap1);
console.log(myMap1.size);
myMap1.delete('c');
console.log(myMap1.size);


/* WeakSets and WeakMaps have a lot to do with objects  */

let myWeakSet1 = new WeakSet();
let s1 = { x: 1.0, y: 1.5 };
myWeakSet1.add(s1);
console.log(myWeakSet1);

let s2 = {
    x: 14.5,
    y: 18.1
};
myWeakSet1.add(s2);
console.log("Size=" + myWeakSet1);
myWeakSet1.delete(s2);
console.log("Size=" + myWeakSet1);


let myWeakMap1 = new WeakMap();
let s1 = { x: 1.0, y: 1.5 };
let id1 = { id: 1 };
myWeakMap1.set(id1, s1);
console.log(myWeakMap1);

let s2 = {
    x: 14.5,
    y: 18.1
};
let id2 = { id: 2 };
myWeakMap1.set(id2, s2);
console.log("Size=" + myWeakMap1);
myWeakMap1.delete(id2);
console.log("Size=" + myWeakMap1);
