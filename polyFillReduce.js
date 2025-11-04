
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





