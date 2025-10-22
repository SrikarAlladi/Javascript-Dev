var cart = ["shirts" , "pants" , "shoes"];

const promise = createOrder(cart);

console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    console.log(proceedToPayment(orderId))
})
.catch(function(err){
    console.Error(err);
})

function validateCart(cart){
    console.log(cart);
    return true;
}

function proceedToPayment (orderId) {
    const pr = new Promise(function(resolve,reject){
        if(orderId){
            resolve("Payment Successful");
        }
    })
    return pr;
}

function createOrder () {

    const pr = new Promise(function(resolve,reject){

        if(!validateCart(cart)){
            const err = new Error("Cart is Not Valid");
            reject(err);
        }

        const orderId = "12345";

        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },1000)
        }

    })

    return pr;
}

const newFunction = (num) => {
    const pr = new Promise(function(resolve,reject){
        if(num) return resolve(num)
    })
    return pr
}

newFunction(12).then((res) => {
    console.log(res)
})
