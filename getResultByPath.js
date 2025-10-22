function getResultByPath(path, obj) {
    //write your implementation here
  
    let res = obj
    let finalRes
  
    const pathKeys = path.split(".")
  
    pathKeys.forEach((x) => {
      if (res == undefined || res == null) return res 

      if (x.includes('[')) {
        console.log("If case",res,x)

        let key = x.split("[")[0]
        let index = Number((x.split("[")[1]).charAt(0))

        if(Array.isArray(res[key])){ 
          finalRes = (res[key])[index]
        }else{
            return undefined
        } 
      } else { 
        finalRes = res[x]   
      }
      res = finalRes
    })
  
    return finalRes
  
}

const path = "config.settings.mode";
const obj = {
    config : {
        settings : null
    }
}


console.log( getResultByPath(path, obj)); 


let randomString = "  Lead and Trail   ";


console.log(randomString.split(" "));

randomString.split(" ").forEach((x) => {
    console.log(x.split('').reverse().join(''))
})


function add(){ 
    return undefined
}

function once(fn){
    let count = 0;
    let res 
    return function(...args){
        if(count < 1) {
            res = fn(...args)
            count++
        } 
        return res
    }
}

const onceAdd = once(add)

console.log(onceAdd());
console.log(onceAdd());


let str = 967

console.log( str.toString().split('').sort().reverse().join(''))

console.log(Math.random())


