function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    return y; // Not just function , function along with it's lexical scope is returned 
}
var z = x();

console.log(z);  // prints functions 

z(); // Prints a = 10 , as it retains lexical scope 

// Function along with it's lexical scope/env bundled together forms a closure 

// Functions when returned from another functions they still retains lexical scope 