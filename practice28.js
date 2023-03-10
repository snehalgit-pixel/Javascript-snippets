/*
   To demonstrate a callback.
   calculateSum(...) is running the callback after the after the calculation is finished
*/
function displayres(sum) {
    let res = `Sum of given numbers = ${sum}`;
    console.log(res);
}
function calculateSum(n1, n2, let_us_callback) {
    s = n1 + n2;
    console.log("Calculation over at backend");
    let_us_callback(s);
}
calculateSum(10, 20, displayres);