/* To demonstrate Asynchronous function behaviour
   Synchronous function behaviour means to execute the code step by step
   In Asynchronous function behaviour, it is not necessarily so.
   The following example best demonstrates the asynchronous approach
*/

console.log("Start execution");

setTimeout(() => {
    console.log('Timeout is going on. Wait...');
}, 4000);

console.log("End execution");

/* Note that Start execution message will be followed End Execution message. After 4 seconds the setTimeout() message will be displayed.  */