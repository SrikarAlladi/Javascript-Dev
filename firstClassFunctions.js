a(); // Prints
console.log(b);
// b(); // Throws error - undefined not sure if it's function
 
// Function statement / declaration
function a(){
    console.log("a called");
}

// Function Expression 
var b = function(param){     // If we give name it's called named function expression
    console.log("b called",param);
}

b(function(){

});

// Major difference btween statement & expression is hoisting 


// anonymous functions - functions without name 

// function () {
        // -> Throws error name should be specified , these are used when we assign this function to another variable
// }


// parameters -> variables in functions  || arguments -> values passed when functions with parameters called 

// First class functions 

    // Even functions are passed as arguments , usage of functions as values is known as first class functions 


