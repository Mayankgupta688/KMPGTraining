// Single Threaded Execution Model 
// Multiple Threads in Background to handle time consuming requests

var data = 10;

setTimeout(() => {
    console.log(data)
}, 100000);


setTimeout(() => {
    console.log(data)
}, 10000);

setTimeout(() => {
    console.log(data)
}, 4000);


setTimeout(() => {
    console.log(data)
}, 10000);

setTimeout(() => {
    console.log(data)
}, 4000);

setTimeout(() => {
    console.log(data)
}, 10000);

data = 20;
console.log(data);