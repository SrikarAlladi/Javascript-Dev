var cart = ["shirts" , "pants" , "shoes"];

 
// const promise =  createOrder();

// promise.then( function(orderId){
//          proceedToPayment(orderId);
//     }
// )

let github = "https://api.github.com/users/SrikarAlladi";

const promise = fetch(github); // return a promise

console.log(promise);
// above prints promise state which has three things prototype , promise state (pending , fullfilled ,failed) , result

promise.then((data) => {
    console.log(data);
})

// Promise is the object representing the eventual completion or failure of asynchronous operation


 // Promise => Object { status: "" } => pending, fulfilled, rejected
// settled: fulfilled, rejected

// Promise methods: Promise.all

// ids : [10, 12, 13]
// network:

const p1 = new Promise((resolve, reject) => {
setTimeout(() => resolve("P1"), 2000);
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => reject("P2"), 1000);
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => reject("P3"), 3000);
});

// t = 3000ms (all promises will be settled)
const resultPromise = Promise.any([p1, p2, p3]);
resultPromise.then((list) => {
console.log(list);
});

const resultPromiseAllSettled = Promise.allSettled([p1, p2, p3]);
resultPromiseAllSettled.then((list) => {
console.log(list);
}) 


// | Method                                               | Description                                                                        | Example                                                 |
// | ---------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
// | *Promise.resolve(value)*                         | Returns a promise that resolves with the given value.                              | Promise.resolve(42)                                   |
// | *Promise.reject(reason)*                         | Returns a promise that rejects with the given reason.                              | Promise.reject("Error!")                              |
// | *Promise.all(iterable)*                          | Waits for *all* promises to resolve (or rejects if any fails).                   | Promise.all([p1, p2, p3])                             |
// | *Promise.allSettled(iterable)*                   | Waits for all promises to settle (resolve or reject) and gives results for each.   | Promise.allSettled([p1, p2, p3])                      |
// | *Promise.race(iterable)*                         | Resolves or rejects as soon as *one* promise settles.                            | Promise.race([p1, p2])                                |
// | *Promise.any(iterable)*                          | Resolves as soon as *one* promise fulfills; rejects only if all reject.          | Promise.any([p1, p2, p3])                             |
// | *Promise.withResolvers()* 🆕 (ES2024 proposal) | Returns { promise, resolve, reject } tuple — lets you resolve/reject externally. | const { promise, resolve } = Promise.withResolvers(); |





// String[] inputArray = { "abcd", "java", "dcba", "ajav", "xyz", "epam", "pame", "aepm" };
 
// expected output
 
// "epam", "pame", "aepm" 		
// "abcd" "dcba"
// "java" "ajav"