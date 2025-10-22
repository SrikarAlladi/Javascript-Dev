// Callstack is in browser engine (settimeout , dom apis, console.log , local storage are powers of javascript)

// Event loop runs between callstack & callback queue (this queue has all cb functions of browsers)

// Event loop picks up elements from cb queue to call stack 

// Event listeners are also callback functions , when called pulled to cb queue then event loops brings it to call stack 

// Microtask queue has higher priority over callback queue  --> callback functions with Promises , Mutation observers comes under microstack queue

// Starvation -> Callback queue waiting until micro task queue's tasks to get executed 

