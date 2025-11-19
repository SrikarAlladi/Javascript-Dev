let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2)

multiplyByTwo(6)





// For Revision
// Function currying

// 1) Bind method,
// Take a function, modify it by attaching bind to define a parameter (or method)

// 2) Closure method
// Take a function, Define parameter in closure style, define another parameter by just defining it while using as curried version

// {In python for achieving similar functionality Somewhat similar method is used, called as  "Decorators"}

// Superb explanation Sir!!!


// Currying using Closures 


let add = function(x){
    return function(y){
        console.log(x+y)
    }
}

let addition = add(2)

addition(3)


const res = [1,2,3,4,5,6]

console.log(res.reduce(function(curr,acc){
    if(curr > acc){
        acc = curr
    }
    return acc
},0))

 // Binding function with arguments 