/*
    To demonstrate the use of promises
    If we try to execute two promise actions simultaneously, then both the promises will be resolved at the time the promise with the maximum delay gets resolved.
*/
const promiseobj1 = new Promise(resolve => {
    setTimeout(() => {
        console.log("-----Resolving first promise-----");
        resolve({ subtasks: [1, 2, 3, 4, 5] });
    }, 3000);
});

const promiseobj2 = new Promise(reolve => {
    setTimeout(() => {
        console.log("------Resolving second promise------");
        resolve({ message: "Hello. It's a sunny day!" });
    }, 6000);
});

Promise.all([promiseobj1, promiseobj2]).then(result => console.log(result));