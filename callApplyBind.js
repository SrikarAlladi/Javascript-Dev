const person = {
    name: "Alice"
};
  
function greet(greeting, punctuation) {
console.log(`${greeting}, ${this.name}${punctuation}`);
}
  
// Using call
greet.call(person, "Hello", "!"); // Hello, Alice!

// Calls the function with given this value and arguments provided individually


const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers); // 7
console.log(max);

// apply is called upon a function, takes this value and arguments as an array


const person2 = {
    name: "Bob",
    greet: function() {
      console.log(`Hi, I am ${this.name}`);
    }
  };
  
  const greetFn = person2.greet.bind(person2);
  greetFn(); // Hi, I am Bob
  
  // Can also use in setTimeout
  setTimeout(person2.greet.bind(person2), 1000); // Hi, I am Bob

// bind returns a new function, with this value and optional arguments preset
  