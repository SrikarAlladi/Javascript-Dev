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