function a(){
    var b = 100; 
    c();
    function c(){
        console.log(b);
    }
}

// console.log(b);      -> Reference Error out of scope 

a();

// Scope is where you can access specific variable / func in code 

// Lexical environment is the local memory along with lexical environment of it's parent 

// c is lexically inside a , a is lexically in global scope || c can have access to variables of a , where as a can have access to global scope memory 

// The way of finding variables through lexical environments is known as scope chain 