
var x = 1;

a();
b();

console.log(x);


function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}


// A global Execution context get's created and then it has memory creation phase and code execution phase.
// Intialiy memory get's allocated for variables it's undefined and for functions it's function definition.

// Then for each function the execution context is created and once it's completed it's get's out of the Call stack.
// When whole code is completed then Global execution context is also deleted from the call stack.