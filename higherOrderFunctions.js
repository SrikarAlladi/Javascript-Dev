// Function which takes another functions as argument or returns a function is known as higher order function 

const radius = [1,2,3,4];

function area(radius){
    return (Math.PI * radius * radius);
}

function circumference(radius){
    return (2 * Math.PI * radius);
}

function diameter(radius){
    return (2 * radius);
}


Array.prototype.calculate = function(logic){
    let output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));

console.log(radius.calculate(circumference));

console.log(radius.calculate(diameter));

const output = radius.map((x) => x.toString(2));

console.log(output);

const filterOutput = radius.filter((x) => x%2 != 0);

console.log(filterOutput);

const maxValue = radius.reduce(function(acc,curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
},0);

const sumValue = radius.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0)

console.log(maxValue);

console.log(sumValue)

