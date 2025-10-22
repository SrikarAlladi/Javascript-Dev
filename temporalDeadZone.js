
console.log(a);
console.log(b); // Can't access before initialization

var a = 10;
let b = 100;

const c = 1000;

// c = 100;  -> throws syntax error 

// Temporal dead zone is the time b/w variable creation & value allocation to it 

// let & const are hoisted but in temporal dead zone 

// let , const variables can't be re declared , it throws syntax error 

// const variables should be initialized when declared 