


let name = "srikar"





console.log(String.prototype)


String.prototype.myName = function(){

    return this == "srikar"

}

console.log(name.myName())