const obj ={
    a: 1,
    b:2,
    func : function (){
        console.log(this.a)
    },

}

console.log((obj.func)())