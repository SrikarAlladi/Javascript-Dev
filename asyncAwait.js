// Async funtions always return a promise 

const p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Hello");
    },5000)
})

const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Hello2");
    },5000)
})

async function getData(){
    return p;
}

// console.log(getData());

// getData().then(res => console.log(res));

// await can only be used inside async functions 

async function newFunc(){
    const val = await p;
    console.log(val);
    console.log("Hello World");
    const val2 = await p2;
    console.log(val2);
    console.log("Hello World");
}

// async waits till all awaits to resolve 

// await suspends function execution till promise gets resolved

newFunc();


let github = "https://api.github.com/users/SrikarAlladi";

async function funcJson(){
    try{
        const data = await fetch(github);
        const json = await data.json();

        console.log(data,json);
    } catch(err){
        console.log(err);
    }
}


funcJson();


// • Async/await used for handling promises
// • Async always return a promise
// ° Await can only used inside an async function
// ° Can only write await keyword infront of a promise
// ° While awaiting JS Engine does not actually wait rather the function is suspended and call stack is free for other stuffs but it looks like program is waiting at that point
// ° Use try catch for Error handling and can also use  . Catch() method


// Promise.any() - Resolves as soon as the first promise fulfills, ignoring rejections. If all reject, it throws an AggregateError

// Promise.race() - Resolves/rejects as soon as the first promise settles (whichever is faster).

// Promise.allSettled() - Wait for all promises to finish, regardless of success or failure. Always returns an array with status and value/reason.

// Promise.all() - Run multiple promises in parallel, and wait for all of them to resolve.