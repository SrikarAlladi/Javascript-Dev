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


console.log("*********************************************")


function mergeData(arr1, arr2) {
    // Your implementation

    let map = new Map()

    let res = []

    arr2.forEach((x) => {
        if (!map.has(x.id)) {
            map.set(x.id,x)
        }
    })

    for (let x of arr1) {
        if (map.has(x.id)) {
            let obj = map.get(x.id)
            let keysArr = [...Object.keys(obj)]
            for (let y of keysArr) {
                if(x.y){
                    x.y = obj[y]
                }else{
                    x[y] = obj[y]
                }
            }     
        } 
        res.push(x)
        map.delete(x.id)
    }


    for(let [id,obj] of map){
        res.push(obj)
    }

    console.log(res)

    return res

}

//For the purpose of user debugging.
//pass your arrays in function call
mergeData([{id:1,name:"Alice"},{id:2,name:"Bob"}],[{id:2,age:30},{id:3,name:"Charlie"}]);

console.log("*********************************************")

function isPossible(start,n) {

    if (n < 0) return false
    if (n == 0) return true
     
    return isPossible(start+1, n-start)
    
}

function isSumOfConsecutive(n) {
// your implementation here

if(n<=1) return false


for (let i = 1; i < Math.floor(n / 2); i++){
    if (isPossible(i, n)) {
        console.log(i)
        return true
    }
}

return false

}

console.log(isSumOfConsecutive(8))
  
console.log("*********************************************")


const flattenArray = (arr) =>{
    
    let res = []

    for(let x of arr){
        if(Array.isArray(x)){
            res = res.concat(flattenArray(x))
        }else{
            res.push(x)
        }
    }

    return res
    
}

console.log(flattenArray([1,2,[1,2,3],[[1,2,3]],4,5]))

console.log("*********************************************")


let str = 'Hello     World'

console.log(str.split(/\s+/));


console.log("*********************************************")

function flattenObject(obj, parentKey) {
    //write your implementation here
  
    let res = {}

    for(let x of Object.keys(obj)){
        let newKey = (parentKey) ? `${parentKey}.${x}` : x;
        if(typeof(obj[x]) == "object" && obj[x] != null && !Array.isArray(obj[x])){
            Object.assign(res,flattenObject(obj[x],newKey))
        }else{
            res[newKey] = obj[x]
        }

    }
    
    return res;
}


let user = {
    name: "John",
    address: {
      country: "India",
      state: "India",
      education: {
        school: "APS",
        year: 2021,
      },
    },
  }; 

console.log(flattenObject(user,"user"))


console.log("*********************************************")

function customAssign(target, ...sources) {
    // Your implementation

    for (let x of [...sources]) {
        
        console.log(x)

        if(x !== null && typeof(x) == "object"){
            for(let y of Object.keys(x)){
                if(typeof(target) == "object"){
                    target[y] = x[y]
                }
            }
        }

    }

    return target

}

console.log(customAssign({a:1},{b:2}))


console.log("*********************************************")

function longestSequence(nums){


    let set = new Set(nums)

    let max = 0;


    let count = 0;
    let current = 0;

    for(let num of set){
        if(!set.has(num-1)){
            count = 1;
            current = num;
        }

        while(set.has(current+1)){
            count++;
            current++;
        }

        max = Math.max(max,count)

    }

    return max;

}

console.log(longestSequence([100,2,5,1,4,3,89,6]))


console.log("*********************************************")