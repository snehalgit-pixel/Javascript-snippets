/* Arrow function : to reduce code particularly when return is used */
function add(...nums) {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}
add(1, 2, 3, 4, 5, 6);
/* add() is not an array. It is an iterable */