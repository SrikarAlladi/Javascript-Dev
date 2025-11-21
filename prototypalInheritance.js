


let name = "srikar"





console.log(String.prototype)


String.prototype.myName = function(){

    return this == "srikar"

}

console.log(name.myName())


Array.prototype.myReduce = function(acc){
    for(let i=0;i<this.length;i++){
        acc += this[i]
    }
    return acc
}

const arr = [1,2,3,4,5]

console.log(arr.myReduce(2));
