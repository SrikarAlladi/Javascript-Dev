cart = ["shirts" , "pants" , "shoes"];

api.createOrder(cart,function(){

    api.proceedToPayment(function() {

        api.showOrderSummary( function() {

            api.updateWallet();

        });

    });

});


// Pyramid of doom or callback hell 

// Inversion of control , we'll lose control

// createOrder(cart)
// .then(orderId => return proceedToPayment(orderId))
// .then(orderSummary=> return showOrderSummary(orderSummary))
// .then(paymentInfo => return updateWallet(paymentInfo))
// .catch((err) => {
//     console.log(err);
// })