const obj = { a: 1, b: { c: 2 } , d : new Date()}

const clone = { ...obj }

clone.b.c = 99

console.log(clone,obj)

const obj2 = { a: 1, b: {c: 2}, d : new Date()}

const clone2 = JSON.parse(JSON.stringify(obj2))

clone2.b.c = 99

console.log(clone2,obj2)

let keysSet = new Set([...Object.keys(obj)],[...Object.keys(obj2)]);

for (let key of  keysSet){
    console.log(key);
}