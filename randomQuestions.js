// console.log("start")

// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log("Timeout", i)
//     }, 0);
//     Promise.resolve().then(() => {
//         console.log("Promise" ,i)
//     })
// }

// async function asyncTask() {
//     console.log("Async Start")
//     await Promise.resolve()
//     console.log("Async end")
// }

// asyncTask()

// console.log("end")


console.log("*********************************************")

let a = {value : 10}

let b =  JSON.parse( JSON.stringify(a)) 
a.value = 20

console.log(b)

b = {value : 30}

console.log(a.value,b)


console.log("*********************************************")

foo()

var foo = function(){
    console.log('A')
}

function foo(){
    console.log('B')
}

foo()