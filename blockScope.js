var a = 6;
let b = 5;
{
    // This curly braces defines block , it combines multiple js statements into a group 
    var a = 10;
    let b = 100;
    const c = 500;
    console.log(a);
}

console.log(a); // Prints 10 , block var overrides global ones

console.log(b); // prints 5

if(true){
    // for multiple 
    let a = 10;
    console.log(a);
}

if(true) console.log(100);

// let a = 50;
// {
//     var a = 15;
// }                --> Illegal shadowing

// Variables & functions which can be accessed inside the block is blockscope

// If we have same var name outside the block scope outside block , block var shadows global var

// block scope also follows lexical scope 