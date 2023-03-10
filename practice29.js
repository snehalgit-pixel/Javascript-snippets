/*
   Demonstration of callback with the help of arrow function
*/
console.log("Begin");

function userLogin(username, password, callback) {
    setTimeout(() => {
        console.log("Successfully logged in now!");
        callback({ userName: username, message: "Welcome" });
    }, 4000);
}

let user = userLogin("Hello123", 9087654321, user => {
    console.log(user);
    console.log("Message:" + user.message);
});

console.log("End");