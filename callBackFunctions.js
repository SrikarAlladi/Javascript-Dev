// What is call back functions in js ?
//  - Function passed into another function as argument is called  callback func , it gives asyn powers for synchronous single threaded language 

setTimeout(() => {
    console.log("Hello");
},5000);

// Func parameter in settimeout is callback function

function x(param) {
    console.log("x");
    param();
}

x(function y(){
    console.log("y");
});

// y -> is a call back function


// Event listeners

function attachEvent() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click" , function click(){
        console.log("Button Clicked" , count++);
    })
}

attachEvent();

