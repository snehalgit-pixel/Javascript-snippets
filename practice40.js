const a1 = [4, 5, 6, 6, 5, 3, 4];
a1.sort((a, b) => {
    return a-b;
});
console.log("Ascending ---> "+a1);

a1.sort((a, b) => {
    return b-a;
});

console.log("Descending ---> "+a1);