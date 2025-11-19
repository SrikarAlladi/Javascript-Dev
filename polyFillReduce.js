
Array.prototype.myReduce =  function(callBack,accumulator){

    const arr = this;
    console.log(arr)
    let acc = accumulator 

    for(let i=0;i<arr.length;i++){
        acc = callBack(acc,arr[i])
    }

    console.log(acc)

    return acc

}


console.log( ([1,2,4,5,6,6]).myReduce((a,b) => a+b,2))

console.log(
([1,2,4,5,6,6]).reduce((curr,acc) => {
    acc+=curr
    return acc
},3)
)


const arr = [1,2,3,4,5,6,7]

const fn = (ele) => {
    return ele%2 ==0
}

Array.prototype.myFilter = function(fn){
    let arr = []
    for(let i = 0;i<this.length;i++){
        if(fn(this[i])){
            arr.push(this[i])
        }
    }
    return arr;
}

console.log(arr.myFilter(fn));



