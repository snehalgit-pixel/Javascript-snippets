function printHello() {
    for (let i=1; i<=5; i++) {
        let a = setTimeout(() => {
            console.log("Hello! "+i);
        }, 5000);
        // console.log(a);
    }
}

printHello();